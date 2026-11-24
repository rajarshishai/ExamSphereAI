import { Component, OnInit, OnDestroy, inject, signal, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  AiTutorService,
  AIMentorMode,
  SupportedLanguage,
  ChatMessage,
  InteractiveMCQ,
  FlashcardItem,
  ConversationHistoryItem
} from '../../../core/services/ai-tutor.service';
import { ExamService, BackendExam } from '../../../core/services/exam.service';
import { AuthService } from '../../../core/services/auth.service/auth.service';
import { AiSearchEngineService } from '../../../core/services/ai-search-engine.service';
import { ToastService } from '../../../core/services/toast.service';

export interface ExtendedMessage extends ChatMessage {
  id: string;
  citations?: string[];
  suggestedPrompts?: string[];
}

@Component({
  selector: 'app-ai-mentor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ai-mentor.html',
  styleUrls: ['./ai-mentor.css']
})
export class AiMentor implements OnInit, OnDestroy, AfterViewChecked {
  private aiTutorService = inject(AiTutorService);
  private examService = inject(ExamService);
  private authService = inject(AuthService);
  private searchEngine = inject(AiSearchEngineService);
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private toastService = inject(ToastService);

  @ViewChild('chatScrollContainer') private chatScrollContainer!: ElementRef;
  @ViewChild('fileInputRef') private fileInputRef!: ElementRef;

  // Active States
  activeMode = signal<AIMentorMode>('academic_doubt');
  selectedExamId = signal<string>('all');
  selectedLanguage = signal<SupportedLanguage>('en');
  selectedDifficulty = signal<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  currentInput = signal<string>('');
  isLoading = signal<boolean>(false);
  activeConversationId = signal<string | undefined>(undefined);
  isSidebarOpen = signal<boolean>(false);

  // Document Q&A Attachment State
  selectedDocument = signal<{ name: string; text: string; wordCount: number } | null>(null);

  // Speech-to-Text & Text-to-Speech State
  isVoiceRecording = signal<boolean>(false);
  isVoiceSpeaking = signal<boolean>(false);
  activeSpeakingMessageId = signal<string | null>(null);
  private speechRecognition: any = null;

  // Interactive Widgets State
  mcqUserAnswers = signal<{ [key: string]: number }>({});
  flippedFlashcards = signal<Set<string>>(new Set());

  // Data
  exams = signal<BackendExam[]>([]);
  conversations = signal<ConversationHistoryItem[]>([]);
  messages = signal<ExtendedMessage[]>([]);
  private shouldScrollToBottom = false;

  // Mode Definitions with Icons and Badges
  modes: { id: AIMentorMode; label: string; icon: string; description: string }[] = [
    {
      id: 'academic_doubt',
      label: 'Academic Doubts',
      icon: '🧠',
      description: 'Step-by-step concept explanations, formulas & derivations.'
    },
    {
      id: 'exam_info',
      label: 'Exam Intelligence',
      icon: '📋',
      description: 'Verified eligibility, patterns, negative marking & dates.'
    },
    {
      id: 'study_plan',
      label: 'Study Planner',
      icon: '📅',
      description: 'Personalized daily & weekly timetables based on exam targets.'
    },
    {
      id: 'practice_mcq',
      label: 'Practice MCQs',
      icon: '🎯',
      description: 'AI-generated test questions with interactive answer keys.'
    },
    {
      id: 'revision_notes',
      label: 'Revision & Flashcards',
      icon: '⚡',
      description: 'High-yield formula cheat sheets and flippable flashcards.'
    },
    {
      id: 'document_qa',
      label: 'Document / PDF Q&A',
      icon: '📄',
      description: 'Ask questions strictly grounded in your uploaded notes.'
    },
    {
      id: 'performance_diagnostic',
      label: 'Mistake Diagnostics',
      icon: '🔬',
      description: 'Analyze negative marking traps and accuracy recovery steps.'
    },
    {
      id: 'career_recommendation',
      label: 'Career & Exam Finder',
      icon: '🧭',
      description: 'Discover national & state exams matching your qualifications.'
    },
    {
      id: 'exam_day_guide',
      label: 'Exam Day Guide',
      icon: '🛡️',
      description: 'Admit card rules, dress codes, reporting times & checklists.'
    }
  ];

  languages: { code: SupportedLanguage; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'hinglish', label: 'Hinglish', native: 'Hinglish' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' }
  ];

  quickPrompts = [
    "⚡ What is Ohm's Law and resistance formula?",
    "⚛️ Explain Einstein's Photoelectric Equation",
    '🧬 Differences between DNA and RNA',
    '💻 Binary Search time complexity derivation',
    '🏛️ Fundamental Rights in Indian Constitution (Article 21 & 32)',
    '⏳ Time and Work LCM shortcut method',
    '📋 What is the eligibility and pattern for GATE CSE 2026?',
    '🧮 Solve quadratic equation x^2 - 5x + 6 = 0'
  ];

  ngOnInit(): void {
    this.initSpeechRecognition();
    this.loadExams();
    this.loadChatHistory();

    // Check query params if navigated from syllabus or other pages
    this.route.queryParams.subscribe(params => {
      if (params['topic']) {
        const topic = params['topic'];
        this.currentInput.set(`Explain ${topic} with key formulas and high-yield exam tips.`);
        this.sendMessage();
      }
      if (params['mode']) {
        const m = params['mode'] as AIMentorMode;
        if (this.modes.some(x => x.id === m)) {
          this.activeMode.set(m);
        }
      }
    });

    // Default welcome message
    this.messages.set([
      {
        id: 'msg-welcome',
        role: 'assistant',
        content: `### 🔍 ExamSphere Universal AI Search & Examination Mentor

Search any academic question, derivation, syllabus doubt, or competitive exam query. I will deliver a verified, genuine, and comprehensive answer!

- **🔬 Conceptual Search:** Detailed mechanisms, governing laws & SI units.
- **📐 Mathematical & Formula Derivations:** Step-by-step problem solving with formulas.
- **🎯 Interactive Practice MCQs:** Direct practice drills with real-time scoring.
- **📋 Verified Examination Specs:** Eligibility, patterns, negative marking, and cutoff guidance for GATE, JEE, NEET, UPSC, CAT, SSC CGL.
- **📄 Document / PDF Notes Q&A:** Ground questions directly in your uploaded notes.

Type your query in the search bar below or click any trending search query to start!`,
        mode: 'academic_doubt',
        language: 'en',
        createdAt: new Date().toISOString(),
        suggestedPrompts: [
          "Explain Ohm's Law with formula and exam traps",
          "What is Einstein's Photoelectric Equation?",
          'Difference between DNA and RNA with comparison table',
          'Solve quadratic equation 2x^2 - 7x + 3 = 0',
          'What are the eligibility and marking rules for GATE CSE 2026?'
        ]
      }
    ]);
  }

  ngOnDestroy(): void {
    this.stopSpeaking();
    if (this.speechRecognition) {
      try { this.speechRecognition.stop(); } catch {}
    }
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  private scrollToBottom(): void {
    try {
      if (this.chatScrollContainer) {
        this.chatScrollContainer.nativeElement.scrollTop =
          this.chatScrollContainer.nativeElement.scrollHeight;
      }
    } catch {}
  }

  loadExams(): void {
    this.examService.getExams().subscribe({
      next: ({ exams }) => {
        if (exams && exams.length > 0) {
          this.exams.set(exams);
        }
      },
      error: () => {}
    });
  }

  loadChatHistory(): void {
    const token = this.authService.getToken();
    if (!token) return;

    this.aiTutorService.getHistory(this.selectedExamId()).subscribe({
      next: (history) => {
        if (history) {
          this.conversations.set(history);
        }
      },
      error: () => {}
    });
  }

  startNewChat(): void {
    this.activeConversationId.set(undefined);
    this.selectedDocument.set(null);
    this.stopSpeaking();
    this.messages.set([
      {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: `### New Session Started 🚀\n\nWhat subject, concept, or examination question would you like to explore?`,
        mode: this.activeMode(),
        language: this.selectedLanguage(),
        createdAt: new Date().toISOString()
      }
    ]);
    this.isSidebarOpen.set(false);
  }

  selectConversation(conv: ConversationHistoryItem): void {
    this.activeConversationId.set(conv._id);
    this.stopSpeaking();
    this.selectedDocument.set(null);

    const mapped: ExtendedMessage[] = conv.messages.map((m, idx) => ({
      id: `conv-msg-${idx}-${Date.now()}`,
      role: m.role,
      content: m.content,
      mode: m.mode,
      language: m.language,
      mcqs: m.mcqs,
      flashcards: m.flashcards,
      createdAt: m.createdAt
    }));

    this.messages.set(mapped);
    this.shouldScrollToBottom = true;
    this.isSidebarOpen.set(false);
  }

  deleteConversation(convId: string, event: Event): void {
    event.stopPropagation();
    this.aiTutorService.deleteConversation(convId).subscribe({
      next: () => {
        this.conversations.update(list => list.filter(c => c._id !== convId));
        if (this.activeConversationId() === convId) {
          this.startNewChat();
        }
      },
      error: () => {}
    });
  }

  clearAllHistory(): void {
    if (!confirm('Are you sure you want to clear all chat sessions?')) return;
    this.aiTutorService.clearAllConversations().subscribe({
      next: () => {
        this.conversations.set([]);
        this.startNewChat();
      },
      error: () => {}
    });
  }

  setMode(mode: AIMentorMode): void {
    this.activeMode.set(mode);
  }

  selectPrompt(prompt: string): void {
    this.currentInput.set(prompt);
    this.sendMessage();
  }

  sendMessage(): void {
    const text = this.currentInput().trim();
    if (!text || this.isLoading()) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: ExtendedMessage = {
      id: userMsgId,
      role: 'user',
      content: text,
      mode: this.activeMode(),
      language: this.selectedLanguage(),
      createdAt: new Date().toISOString()
    };

    this.messages.update(msgs => [...msgs, userMsg]);
    this.currentInput.set('');
    this.isLoading.set(true);
    this.shouldScrollToBottom = true;

    // Send payload to backend
    this.aiTutorService.askQuestion({
      question: text,
      mode: this.activeMode(),
      examId: this.selectedExamId() !== 'all' ? this.selectedExamId() : undefined,
      language: this.selectedLanguage(),
      difficulty: this.selectedDifficulty(),
      conversationId: this.activeConversationId(),
      documentText: this.selectedDocument()?.text,
      documentName: this.selectedDocument()?.name
    }).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.conversationId) {
          this.activeConversationId.set(res.conversationId);
          this.loadChatHistory();
        }

        const aiMsg: ExtendedMessage = {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content: res.answer,
          mode: res.mode || this.activeMode(),
          language: res.language || this.selectedLanguage(),
          mcqs: res.mcqs,
          flashcards: res.flashcards,
          citations: res.citations,
          suggestedPrompts: res.suggestedPrompts,
          createdAt: new Date().toISOString()
        };

        this.messages.update(msgs => [...msgs, aiMsg]);
        this.shouldScrollToBottom = true;
      },
      error: async () => {
        // Guaranteed instant search fallback so student ALWAYS receives a genuine answer
        try {
          const fallbackRes = await this.searchEngine.searchAnswer(text, {
            mode: this.activeMode(),
            language: this.selectedLanguage(),
            examId: this.selectedExamId() !== 'all' ? this.selectedExamId() : undefined,
            difficulty: this.selectedDifficulty()
          });

          this.isLoading.set(false);
          const aiMsg: ExtendedMessage = {
            id: `ai-search-${Date.now()}`,
            role: 'assistant',
            content: fallbackRes.answer,
            mode: fallbackRes.mode || this.activeMode(),
            language: fallbackRes.language || this.selectedLanguage(),
            mcqs: fallbackRes.mcqs,
            flashcards: fallbackRes.flashcards,
            citations: fallbackRes.citations,
            suggestedPrompts: fallbackRes.suggestedPrompts,
            createdAt: new Date().toISOString()
          };

          this.messages.update(msgs => [...msgs, aiMsg]);
          this.shouldScrollToBottom = true;
        } catch {
          this.isLoading.set(false);
        }
      }
    });
  }

  // ---------------------------------------------
  // DOCUMENT / NOTE ATTACHMENT HANDLER
  // ---------------------------------------------
  triggerFileInput(): void {
    this.fileInputRef?.nativeElement?.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const content = e.target.result as string;
      const words = content.trim().split(/\s+/).length;
      this.selectedDocument.set({
        name: file.name,
        text: content,
        wordCount: words
      });
      this.activeMode.set('document_qa');
    };
    reader.readAsText(file);
    event.target.value = '';
  }

  removeDocument(): void {
    this.selectedDocument.set(null);
  }

  // ---------------------------------------------
  // INTERACTIVE MCQ ANSWER SELECTION
  // ---------------------------------------------
  selectMCQOption(mcqKey: string, optionIdx: number): void {
    this.mcqUserAnswers.update(answers => ({
      ...answers,
      [mcqKey]: optionIdx
    }));
  }

  isMCQOptionSelected(mcqKey: string, optionIdx: number): boolean {
    return this.mcqUserAnswers()[mcqKey] === optionIdx;
  }

  // ---------------------------------------------
  // INTERACTIVE FLASHCARD FLIP
  // ---------------------------------------------
  toggleFlashcard(cardKey: string): void {
    this.flippedFlashcards.update(set => {
      const copy = new Set(set);
      if (copy.has(cardKey)) {
        copy.delete(cardKey);
      } else {
        copy.add(cardKey);
      }
      return copy;
    });
  }

  isFlashcardFlipped(cardKey: string): boolean {
    return this.flippedFlashcards().has(cardKey);
  }

  // ---------------------------------------------
  // SPEECH-TO-TEXT (VOICE INPUT)
  // ---------------------------------------------
  private initSpeechRecognition(): void {
    if (typeof window === 'undefined') return;
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      this.speechRecognition = new SpeechRec();
      this.speechRecognition.continuous = false;
      this.speechRecognition.interimResults = false;

      this.speechRecognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          const current = this.currentInput();
          this.currentInput.set(current ? `${current} ${transcript}` : transcript);
        }
        this.isVoiceRecording.set(false);
      };

      this.speechRecognition.onerror = () => {
        this.isVoiceRecording.set(false);
      };

      this.speechRecognition.onend = () => {
        this.isVoiceRecording.set(false);
      };
    }
  }

  toggleVoiceInput(): void {
    if (!this.speechRecognition) {
      this.toastService.warning('Speech recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.');
      return;
    }

    if (this.isVoiceRecording()) {
      this.speechRecognition.stop();
      this.isVoiceRecording.set(false);
    } else {
      try {
        const langCode = this.selectedLanguage() === 'hi' ? 'hi-IN' : 'en-IN';
        this.speechRecognition.lang = langCode;
        this.speechRecognition.start();
        this.isVoiceRecording.set(true);
      } catch {
        this.isVoiceRecording.set(false);
      }
    }
  }

  // ---------------------------------------------
  // TEXT-TO-SPEECH (VOICE OUTPUT READOUT)
  // ---------------------------------------------
  speakMessage(msgId: string, text: string): void {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      this.toastService.warning('Speech synthesis is not available in your current environment.');
      return;
    }

    if (this.isVoiceSpeaking() && this.activeSpeakingMessageId() === msgId) {
      this.stopSpeaking();
      return;
    }

    this.stopSpeaking();

    // Clean markdown symbols for natural speech
    const cleanText = text
      .replace(/#{1,6}\s+/g, '')
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/`{1,3}[^`]*`{1,3}/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .slice(0, 1000);

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      this.isVoiceSpeaking.set(false);
      this.activeSpeakingMessageId.set(null);
    };

    utterance.onerror = () => {
      this.isVoiceSpeaking.set(false);
      this.activeSpeakingMessageId.set(null);
    };

    this.isVoiceSpeaking.set(true);
    this.activeSpeakingMessageId.set(msgId);
    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking(): void {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.isVoiceSpeaking.set(false);
    this.activeSpeakingMessageId.set(null);
  }

  // ---------------------------------------------
  // FORMATTING HELPER FOR MARKDOWN & MATH
  // ---------------------------------------------
  formatMarkdown(content: string): SafeHtml {
    if (!content) return '';

    let formatted = content
      // Escape raw HTML entities
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Markdown tables (| Col1 | Col2 |)
    formatted = formatted.replace(/((?:\|[^\n]+\|\r?\n)+)/g, (tableBlock) => {
      const rows = tableBlock.trim().split('\n').map(r => r.trim()).filter(Boolean);
      if (rows.length < 2) return tableBlock;
      let html = '<div class="overflow-x-auto my-3"><table class="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">';
      let isBody = false;
      rows.forEach((row, idx) => {
        if (row.includes('---') || row.includes(':---')) return;
        const cells = row.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
        if (idx === 0) {
          html += '<thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200"><tr>';
          cells.forEach(c => html += `<th class="px-3 py-2 border border-slate-200 font-semibold">${c}</th>`);
          html += '</tr></thead><tbody>';
          isBody = true;
        } else {
          html += '<tr class="border-b border-slate-100 hover:bg-slate-50">';
          cells.forEach(c => html += `<td class="px-3 py-2 border border-slate-200 text-slate-700">${c}</td>`);
          html += '</tr>';
        }
      });
      if (isBody) html += '</tbody>';
      html += '</table></div>';
      return html;
    });

    // Fenced Code blocks with language tags
    formatted = formatted.replace(/```(?:([a-zA-Z0-9_-]+)\n)?([\s\S]*?)```/g, (_m, lang, code) => {
      const languageBadge = lang ? `<span class="text-[10px] uppercase font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">${lang}</span>` : '<span class="text-[10px] text-slate-400 font-mono">Code</span>';
      return `<div class="my-3 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 text-slate-100 font-mono text-xs">
        <div class="flex items-center justify-between px-3 py-1.5 bg-slate-950 border-b border-slate-800">
          ${languageBadge}
        </div>
        <pre class="p-3 overflow-x-auto leading-relaxed"><code>${code.trim()}</code></pre>
      </div>`;
    });

    // Inline code
    formatted = formatted.replace(/`([^`]+)`/gim, '<code class="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono font-semibold">$1</code>');

    // LaTeX / Math block equations ($$...$$)
    formatted = formatted.replace(/\$\$([\s\S]*?)\$\$/g, '<div class="my-2.5 p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 text-blue-950 font-mono text-center text-sm font-semibold overflow-x-auto">$1</div>');
    // Inline math ($...$)
    formatted = formatted.replace(/\$([^\$\n]+)\$/g, '<span class="px-1.5 py-0.5 rounded bg-blue-50 text-blue-900 font-mono text-xs font-semibold">$1</span>');

    // Headers
    formatted = formatted
      .replace(/^### (.*$)/gim, '<h3 class="text-base sm:text-lg font-bold text-[#172F61] mt-3 mb-1.5">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-lg sm:text-xl font-extrabold text-[#172F61] mt-4 mb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-xl sm:text-2xl font-black text-[#172F61] mt-5 mb-2">$1</h1>')
      // Blockquotes
      .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 py-1 my-2 bg-blue-50/50 rounded-r-lg text-slate-700 italic">$1</blockquote>')
      // Bold & Italic
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-slate-900">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em class="italic text-slate-800">$1</em>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">$1</a>')
      // Bullet lists
      .replace(/^[•\-\*] (.*$)/gim, '<li class="ml-4 list-disc text-slate-700 my-0.5">$1</li>')
      // Line breaks
      .replace(/\n\n/g, '<div class="h-2"></div>')
      .replace(/\n/g, '<br/>');

    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}
