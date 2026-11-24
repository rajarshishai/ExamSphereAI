import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  
  // Dynamically gets the current year for copyright text
  currentYear: number = new Date().getFullYear();

  /**
   * Smoothly scrolls to a specific DOM section ID on the page
   */
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Fallback if the element is on another page or route
      console.warn(`Section with ID "${sectionId}" not found on this page.`);
    }
  }

  /**
   * Handles examination category selection and scrolls to the target view/section
   */
  selectExamAndScroll(event: Event, examCategory: string): void {
    event.preventDefault();
    
    // You can also emit an event or update a shared service if exams are filtered dynamically
    console.log(`Selected exam category: ${examCategory}`);

    // Scroll to exams section or results area (adjust ID as per your main page layout)
    const examsSection = document.getElementById('exams') || document.getElementById('features');
    if (examsSection) {
      examsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}