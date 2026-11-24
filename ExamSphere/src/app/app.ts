
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './src/component/navbar/navbar';
import { Footer } from './src/component/footer/footer';
import { AiFloatingWidget } from './src/component/ai-floating-widget/ai-floating-widget';
import { ToastService } from './core/services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, RouterOutlet, AiFloatingWidget],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  toastService = inject(ToastService);
}
