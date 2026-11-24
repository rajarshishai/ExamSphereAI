
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface SupportTicket {
  ticketId: string;
  name: string;
  email: string;
  examName: string;
  category: string;
  subject: string;
  message: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  createdAt: Date;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements OnInit {

  contactForm!: FormGroup;
  trackForm!: FormGroup;

  isSubmitting = false;
  successMessage = '';
  generatedTicketId = '';

  trackedTicket: SupportTicket | null = null;
  trackError = '';

  queryCategories: string[] = [
    'General Inquiry',
    'Exam Information',
    'Syllabus Correction',
    'Mock Test Issue',
    'Incorrect Answer / PYQ Error',
    'AI Tutor Issue',
    'Technical Support',
    'Account & Subscription',
    'New Exam Request',
    'Feedback & Suggestions'
  ];

  examsList: string[] = [
    'GATE Computer Science',
    'UPSC Civil Services',
    'JEE Advanced',
    'NEET UG',
    'CAT Management',
    'GRE / GMAT',
    'Other / General Request'
  ];

  faqs: FaqItem[] = [
    {
      question: 'How do I find my examination syllabus and updated topics?',
      answer: 'Navigate to your dashboard, select your target exam from the top dropdown, and click on the "Syllabus Hub". If you notice any missing topics, you can report it directly using our syllabus correction form.',
      isOpen: false
    },
    {
      question: 'Can I generate personalized mock tests based on my weak areas?',
      answer: 'Yes! Our AI analyzes your past quiz performance and automatically tailors mock tests targeting your weak conceptual zones.',
      isOpen: false
    },
    {
      question: 'How do I report an incorrect answer in a mock test or PYQ?',
      answer: 'Use the feedback flag icon located next to every question during review mode, or select "Incorrect Answer / PYQ Error" in the contact form above.',
      isOpen: false
    },
    {
      question: 'How does the ExamSphere AI tutor work?',
      answer: 'Our AI tutor is trained specifically on verified academic curricula, textbooks, and previous year solutions to provide step-by-step explanations.',
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      examName: ['', Validators.required],

      category: ['', Validators.required],

      subject: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      message: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],

      attachment: [null]
    });

    this.trackForm = this.fb.group({
      ticketIdInput: ['', Validators.required]
    });
  }

  // Submit Contact Form
  onSubmit(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formData = this.contactForm.getRawValue();

    setTimeout(() => {

      const randomNum = Math.floor(
        1000 + Math.random() * 9000
      );

      const ticketId =
        `ESAI-${new Date().getFullYear()}-${randomNum}`;

      const newTicket: SupportTicket = {
        ticketId,
        name: formData.fullName,
        email: formData.email,
        examName: formData.examName,
        category: formData.category,
        subject: formData.subject,
        message: formData.message,
        status: 'Pending',
        createdAt: new Date()
      };

      try {
        localStorage.setItem(
          ticketId,
          JSON.stringify(newTicket)
        );

        this.generatedTicketId = ticketId;

        this.successMessage =
          'Your request has been successfully submitted!';

        this.contactForm.reset();

      } catch (error) {
        console.error('Ticket storage failed:', error);

        this.successMessage = '';
        this.trackError =
          'Unable to save your ticket. Please try again.';
      }

      this.isSubmitting = false;

    }, 1200);
  }

  // Track Ticket
  onTrackTicket(): void {

    if (this.trackForm.invalid) {
      this.trackForm.markAllAsTouched();
      return;
    }

    const queryId = String(
      this.trackForm.get('ticketIdInput')?.value ?? ''
    ).trim().toUpperCase();

    this.trackError = '';
    this.trackedTicket = null;

    try {
      const storedData = localStorage.getItem(queryId);

      if (storedData) {
        const ticket = JSON.parse(storedData) as SupportTicket;

        if (ticket.ticketId !== queryId) {
          throw new Error('Invalid ticket data');
        }

        this.trackedTicket = {
          ...ticket,
          createdAt: new Date(ticket.createdAt)
        };

      } else {
        this.trackError =
          'No ticket found with this ID. Please check and try again.';
      }

    } catch (error) {
      console.error('Ticket tracking error:', error);

      this.trackError =
        'Unable to retrieve ticket information.';
    }
  }

  // FAQ Accordion
  toggleFaq(index: number): void {

    if (this.faqs[index]) {
      this.faqs[index].isOpen =
        !this.faqs[index].isOpen;
    }
  }

  // Send another message
  resetContactForm(): void {
    this.successMessage = '';
    this.generatedTicketId = '';
    this.contactForm.reset();
  }
}
