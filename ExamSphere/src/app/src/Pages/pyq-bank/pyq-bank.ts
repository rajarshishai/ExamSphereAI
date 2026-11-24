import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PyqService, PYQItem } from '../../../core/services/pyq.service';
import { ExamService, BackendExam } from '../../../core/services/exam.service';
import { FALLBACK_PYQS } from './pyq-catalog.data';

export interface StreamCategory {
  id: string;
  label: string;
  icon: string;
}

export interface YearGroup {
  year: number;
  count: number;
  questions: PYQItem[];
}

@Component({
  selector: 'app-pyq-bank',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './pyq-bank.html',
  styleUrls: ['./pyq-bank.css']
})
export class PyqBank implements OnInit {
  private pyqService = inject(PyqService);
  private examService = inject(ExamService);

  // Stream Categories
  readonly streamCategories: StreamCategory[] = [
    { id: 'All', label: 'All Streams', icon: '🌐' },
    { id: 'Engineering', label: 'Engineering (GATE & JEE)', icon: '⚙️' },
    { id: 'Medical', label: 'Medical (NEET UG)', icon: '🩺' },
    { id: 'Government', label: 'Civil Services & SSC', icon: '🏛️' },
    { id: 'Management', label: 'Management (CAT MBA)', icon: '📈' },
    { id: 'Banking', label: 'Banking & Finance', icon: '🏦' },
    { id: 'University', label: 'Law & Teaching (CLAT & NET)', icon: '⚖️' },
    { id: 'Defence', label: 'Defence (NDA & CDS)', icon: '🎖️' },
    { id: 'Railway', label: 'Railways & State PSC', icon: '🚆' }
  ];

  // Filters & State
  exams: BackendExam[] = [];
  selectedCategory = 'All';
  selectedExamId = 'All';
  selectedYear: number | undefined = undefined;
  selectedSubject = 'All';
  selectedDifficulty = 'All';
  searchQuery = '';

  // Available Years
  availableYears: number[] = [2025, 2024, 2023, 2022, 2021, 2020];

  // Questions & View mode
  viewMode: 'LIST' | 'GROUPED_BY_YEAR' = 'LIST';
  pyqs: PYQItem[] = [];
  totalCount = 0;
  currentPage = 1;
  totalPages = 1;

  isLoading = false;
  expandedSolutions = new Set<string>();
  userSelections: { [qId: string]: number } = {};

  ngOnInit(): void {
    this.loadExams();
    this.loadQuestions();
  }

  loadExams(): void {
    this.examService.getExams().subscribe({
      next: ({ exams }) => {
        this.exams = exams;
      },
      error: () => {}
    });
  }

  loadQuestions(): void {
    this.isLoading = true;
    const examFilter = this.selectedExamId !== 'All' ? this.selectedExamId : undefined;
    const catFilter = this.selectedCategory !== 'All' ? this.selectedCategory : undefined;

    this.pyqService.getPYQs({
      examId: examFilter,
      year: this.selectedYear,
      category: catFilter,
      subject: this.selectedSubject !== 'All' ? this.selectedSubject : undefined,
      difficulty: this.selectedDifficulty !== 'All' ? this.selectedDifficulty : undefined,
      search: this.searchQuery || undefined,
      page: this.currentPage,
      limit: 50
    }).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.questions && res.questions.length > 0) {
          this.pyqs = res.questions;
          this.totalCount = res.totalCount;
          this.totalPages = res.totalPages;
        } else {
          this.pyqs = this.getFallbackPYQs();
          this.totalCount = this.pyqs.length;
          this.totalPages = 1;
        }
      },
      error: () => {
        this.isLoading = false;
        this.pyqs = this.getFallbackPYQs();
        this.totalCount = this.pyqs.length;
        this.totalPages = 1;
      }
    });
  }

  // Reactive client filter
  get filteredPYQs(): PYQItem[] {
    let list = this.pyqs;

    if (this.selectedCategory !== 'All') {
      const cat = this.selectedCategory.toLowerCase();
      list = list.filter(item => {
        const itemCat = (item as any).category?.toLowerCase() || '';
        const examName = item.examName.toLowerCase();
        return itemCat.includes(cat) || examName.includes(cat) || this.matchesCategoryFallback(item.examId, cat);
      });
    }

    if (this.selectedExamId !== 'All') {
      list = list.filter(item =>
        item.examId === this.selectedExamId ||
        item.examName.toLowerCase().includes(this.selectedExamId.toLowerCase())
      );
    }

    if (this.selectedYear !== undefined) {
      list = list.filter(item => item.year === this.selectedYear);
    }

    if (this.selectedDifficulty !== 'All') {
      list = list.filter(item => item.difficulty === this.selectedDifficulty);
    }

    if (this.searchQuery && this.searchQuery.trim()) {
      const q = this.searchQuery.trim().toLowerCase();
      list = list.filter(item =>
        item.questionText.toLowerCase().includes(q) ||
        item.examName.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        (item.topic && item.topic.toLowerCase().includes(q))
      );
    }

    return list;
  }

  // Grouped questions by year
  get yearGroupedPYQs(): YearGroup[] {
    const list = this.filteredPYQs;
    const yearMap = new Map<number, PYQItem[]>();

    for (const yr of this.availableYears) {
      yearMap.set(yr, []);
    }

    for (const q of list) {
      if (!yearMap.has(q.year)) {
        yearMap.set(q.year, []);
      }
      yearMap.get(q.year)!.push(q);
    }

    const groups: YearGroup[] = [];
    for (const [yr, questions] of yearMap.entries()) {
      if (questions.length > 0) {
        groups.push({
          year: yr,
          count: questions.length,
          questions
        });
      }
    }

    groups.sort((a, b) => b.year - a.year);
    return groups;
  }

  // Count questions for a given year tab
  getYearCount(year?: number): number {
    if (year === undefined) {
      return this.filteredPYQs.length;
    }
    return this.filteredPYQs.filter(q => q.year === year).length;
  }

  selectYear(year?: number): void {
    this.selectedYear = year;
    this.currentPage = 1;
    this.loadQuestions();
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
    this.selectedExamId = 'All';
    this.currentPage = 1;
    this.loadQuestions();
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.loadQuestions();
  }

  resetFilters(): void {
    this.selectedCategory = 'All';
    this.selectedExamId = 'All';
    this.selectedYear = undefined;
    this.selectedDifficulty = 'All';
    this.selectedSubject = 'All';
    this.searchQuery = '';
    this.currentPage = 1;
    this.loadQuestions();
  }

  // Option Selection for Interactive Practice
  selectOption(qId: string, optIdx: number): void {
    this.userSelections[qId] = optIdx;
  }

  isOptionSelected(qId: string, optIdx: number): boolean {
    return this.userSelections[qId] === optIdx;
  }

  // Solution Reveal
  toggleSolution(id: string): void {
    if (this.expandedSolutions.has(id)) {
      this.expandedSolutions.delete(id);
    } else {
      this.expandedSolutions.add(id);
    }
  }

  isSolutionOpen(id: string): boolean {
    return this.expandedSolutions.has(id);
  }

  expandAll(): void {
    this.filteredPYQs.forEach(q => this.expandedSolutions.add(q._id));
  }

  collapseAll(): void {
    this.expandedSolutions.clear();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadQuestions();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadQuestions();
    }
  }

  private matchesCategoryFallback(examSlugOrId: string, targetCategory: string): boolean {
    const slug = examSlugOrId.toLowerCase();
    const cat = targetCategory.toLowerCase();

    if (cat.includes('eng')) return slug.includes('gate') || slug.includes('jee');
    if (cat.includes('med')) return slug.includes('neet');
    if (cat.includes('gov')) return slug.includes('upsc') || slug.includes('ssc');
    if (cat.includes('mgmt')) return slug.includes('cat') || slug.includes('xat');
    if (cat.includes('bank')) return slug.includes('sbi') || slug.includes('ibps');
    if (cat.includes('univ')) return slug.includes('clat') || slug.includes('ugc');
    if (cat.includes('def')) return slug.includes('nda') || slug.includes('cds');
    if (cat.includes('rail')) return slug.includes('rrb') || slug.includes('psc');
    return false;
  }

  private getFallbackPYQs(): PYQItem[] {
    return FALLBACK_PYQS;
  }
}
