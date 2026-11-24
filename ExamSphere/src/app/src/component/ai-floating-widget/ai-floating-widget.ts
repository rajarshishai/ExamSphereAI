import { Component, OnInit, OnDestroy, inject, signal, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  AiTutorService,
  AIMentorMode,
  SupportedLanguage,
  ChatMessage,
  InteractiveMCQ,
  FlashcardItem
} from '../../../core/services/ai-tutor.service';
import { AiSearchEngineService } from '../../../core/services/ai-search-engine.service';
import { ToastService } from '../../../core/services/toast.service';

export interface FloatingWidgetMessage extends ChatMessage {
  id: string;
  suggestedPrompts?: string[];
  mode?: string;
}

@Component({
  selector: 'app-ai-floating-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ai-floating-widget.html',
  styleUrls: ['./ai-floating-widget.css']
})
export class AiFloatingWidget implements OnInit, OnDestroy, AfterViewChecked {
  private aiTutorService = inject(AiTutorService);
  private searchEngine = inject(AiSearchEngineService);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);
  private toastService = inject(ToastService);

  @ViewChild('widgetScrollContainer') private widgetScrollContainer!: ElementRef;

  isOpen = signal<boolean>(false);
  activeMode = signal<AIMentorMode>('academic_doubt');
  currentInput = signal<string>('');
  isLoading = signal<boolean>(false);
  conversationId = signal<string | undefined>(undefined);

  // Speech Recognition & TTS
  isVoiceRecording = signal<boolean>(false);
  isSpeaking = signal<boolean>(false);
  activeSpeakingMessageId = signal<string | null>(null);
  private speechRecognition: any = null;

  // Selected MCQ answers & flipped flashcards
  mcqUserAnswers = signal<{ [key: string]: number }>({});
  flippedCards = signal<{ [key: string]: boolean }>({});
  copiedMessageId = signal<string | null>(null);

  // Available Modes
  modes: { id: AIMentorMode; label: string; icon: string; tooltip: string }[] = [
    { id: 'academic_doubt', label: 'Doubt', icon: '🧠', tooltip: 'Step-by-step concept explanations & derivations' },
    { id: 'practice_mcq', label: 'Quiz', icon: '🎯', tooltip: 'AI exam practice MCQs with explanations' },
    { id: 'exam_info', label: 'Intel', icon: '📋', tooltip: 'Pattern, eligibility & negative marking' },
    { id: 'revision_notes', label: 'Flashcard', icon: '⚡', tooltip: 'High-yield formula cheat cards' },
    { id: 'study_plan', label: 'Planner', icon: '📅', tooltip: 'Daily schedule & revision targets' }
  ];

  // Quick Starter Prompts
  quickQuestions = [
    { icon: '⚡', text: "What is Ohm's Law and resistance formula?" },
    { icon: '⚛️', text: "Explain Einstein's Photoelectric Equation" },
    { icon: '💻', text: 'Binary Search time complexity derivation' },
    { icon: '🏛️', text: 'Fundamental Rights in Indian Constitution (Art 21 & 32)' }
  ];

  messages = signal<FloatingWidgetMessage[]>([
    {
      id: 'fw-welcome',
      role: 'assistant',
      content: `Hello! 👋 I am your **ExamSphere AI Examination Mentor**.\n\nAsk me any concept doubt, formula derivation, or request instant practice MCQs for your target exam.`,
      mode: 'academic_doubt',
      createdAt: new Date().toISOString()
    }
  ]);

  private shouldScroll = false;

  ngOnInit(): void {
    this.initSpeechRecognition();
  }

  ngOnDestroy(): void {
    this.stopSpeaking();
    if (this.speechRecognition) {
      try { this.speechRecognition.stop(); } catch {}
    }
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      try {
        if (this.widgetScrollContainer) {
          this.widgetScrollContainer.nativeElement.scrollTop =
            this.widgetScrollContainer.nativeElement.scrollHeight;
        }
      } catch {}
      this.shouldScroll = false;
    }
  }

  isOnAiMentorPage(): boolean {
    return this.router.url.includes('/ai-mentor');
  }

  toggleOpen(): void {
    this.isOpen.update(v => !v);
    if (this.isOpen()) {
      this.shouldScroll = true;
    } else {
      this.stopSpeaking();
    }
  }

  setMode(mode: AIMentorMode): void {
    this.activeMode.set(mode);
  }

  clearChat(): void {
    this.stopSpeaking();
    this.conversationId.set(undefined);
    this.mcqUserAnswers.set({});
    this.flippedCards.set({});
    this.messages.set([
      {
        id: `fw-welcome-${Date.now()}`,
        role: 'assistant',
        content: `### New Session Started 🚀\n\nWhat topic, question, or exam doubt would you like to solve?`,
        mode: this.activeMode(),
        createdAt: new Date().toISOString()
      }
    ]);
    this.toastService.info('Chat session cleared.');
  }

  selectPrompt(prompt: string): void {
    this.currentInput.set(prompt);
    this.sendMessage();
  }

  sendMessage(): void {
    const text = this.currentInput().trim();
    if (!text || this.isLoading()) return;

    const userMsg: FloatingWidgetMessage = {
      id: `fw-user-${Date.now()}`,
      role: 'user',
      content: text,
      mode: this.activeMode(),
      createdAt: new Date().toISOString()
    };

    this.messages.update(msgs => [...msgs, userMsg]);
    this.currentInput.set('');
    this.isLoading.set(true);
    this.shouldScroll = true;

    this.aiTutorService.askQuestion({
      question: text,
      mode: this.activeMode(),
      conversationId: this.conversationId()
    }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.conversationId) {
          this.conversationId.set(res.conversationId);
        }

        const aiMsg: FloatingWidgetMessage = {
          id: `fw-ai-${Date.now()}`,
          role: 'assistant',
          content: res.answer,
          mode: res.mode || this.activeMode(),
          mcqs: res.mcqs,
          flashcards: res.flashcards,
          suggestedPrompts: res.suggestedPrompts,
          createdAt: new Date().toISOString()
        };

        this.messages.update(msgs => [...msgs, aiMsg]);
        this.shouldScroll = true;
      },
      error: async () => {
        try {
          const fallbackRes = await this.searchEngine.searchAnswer(text, {
            mode: this.activeMode()
          });
          this.isLoading.set(false);
          const aiMsg: FloatingWidgetMessage = {
            id: `fw-ai-search-${Date.now()}`,
            role: 'assistant',
            content: fallbackRes.answer,
            mode: fallbackRes.mode || this.activeMode(),
            mcqs: fallbackRes.mcqs,
            flashcards: fallbackRes.flashcards,
            suggestedPrompts: fallbackRes.suggestedPrompts,
            createdAt: new Date().toISOString()
          };
          this.messages.update(msgs => [...msgs, aiMsg]);
          this.shouldScroll = true;
        } catch {
          this.isLoading.set(false);
        }
      }
    });
  }

  selectMCQOption(key: string, idx: number): void {
    this.mcqUserAnswers.update(a => ({ ...a, [key]: idx }));
  }

  toggleFlashcard(cardKey: string): void {
    this.flippedCards.update(cards => ({
      ...cards,
      [cardKey]: !cards[cardKey]
    }));
  }

  copyMessage(msg: FloatingWidgetMessage): void {
    if (!msg?.content) return;
    navigator.clipboard.writeText(msg.content);
    this.copiedMessageId.set(msg.id);
    this.toastService.success('Copied to clipboard!');
    setTimeout(() => {
      if (this.copiedMessageId() === msg.id) {
        this.copiedMessageId.set(null);
      }
    }, 2000);
  }

  private initSpeechRecognition(): void {
    if (typeof window === 'undefined') return;
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      this.speechRecognition = new SpeechRec();
      this.speechRecognition.continuous = false;
      this.speechRecognition.interimResults = false;
      this.speechRecognition.lang = 'en-IN';

      this.speechRecognition.onresult = (e: any) => {
        const transcript = e.results[0][0].transcript;
        if (transcript) {
          const current = this.currentInput();
          this.currentInput.set(current ? `${current} ${transcript}` : transcript);
        }
        this.isVoiceRecording.set(false);
      };

      this.speechRecognition.onerror = () => this.isVoiceRecording.set(false);
      this.speechRecognition.onend = () => this.isVoiceRecording.set(false);
    }
  }

  toggleVoiceInput(): void {
    if (!this.speechRecognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    if (this.isVoiceRecording()) {
      this.speechRecognition.stop();
      this.isVoiceRecording.set(false);
    } else {
      try {
        this.speechRecognition.start();
        this.isVoiceRecording.set(true);
      } catch {
        this.isVoiceRecording.set(false);
      }
    }
  }

  speakText(msg: FloatingWidgetMessage): void {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (this.isSpeaking() && this.activeSpeakingMessageId() === msg.id) {
      this.stopSpeaking();
      return;
    }

    this.stopSpeaking();
    const clean = msg.content.replace(/[*#`_]/g, '').slice(0, 500);
    const u = new SpeechSynthesisUtterance(clean);
    u.rate = 1.0;
    u.onend = () => {
      this.isSpeaking.set(false);
      this.activeSpeakingMessageId.set(null);
    };
    u.onerror = () => {
      this.isSpeaking.set(false);
      this.activeSpeakingMessageId.set(null);
    };

    this.isSpeaking.set(true);
    this.activeSpeakingMessageId.set(msg.id);
    window.speechSynthesis.speak(u);
  }

  stopSpeaking(): void {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking.set(false);
    this.activeSpeakingMessageId.set(null);
  }

  formatMarkdown(content: string): SafeHtml {
    if (!content) return '';
    let f = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/^### (.*$)/gim, '<h4 class="font-extrabold text-[#172F61] mt-2 mb-1 text-xs tracking-tight">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 class="font-black text-[#172F61] mt-2.5 mb-1.5 text-xs">$1</h3>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-slate-900">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em class="italic text-slate-700">$1</em>')
      .replace(/`([^`]+)`/gim, '<code class="bg-blue-50 text-blue-800 px-1 py-0.5 rounded text-[11px] font-mono border border-blue-200/60">$1</code>')
      .replace(/^[•\-\*] (.*$)/gim, '<li class="ml-3 list-disc text-slate-700 text-xs my-0.5">$1</li>')
      .replace(/\$\$(.*?)\$\$/gim, '<div class="my-1.5 p-1.5 rounded-lg bg-slate-50 text-blue-900 font-mono text-[11px] text-center border border-slate-200 overflow-x-auto">$1</div>')
      .replace(/\$([^\$]+)\$/gim, '<span class="px-1 py-0.2 rounded bg-slate-100 text-blue-900 font-mono text-[11px]">$1</span>')
      .replace(/\n\n/g, '<div class="h-1.5"></div>')
      .replace(/\n/g, '<br/>');

    return this.sanitizer.bypassSecurityTrustHtml(f);
  }
}
