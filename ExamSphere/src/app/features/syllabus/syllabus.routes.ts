import { Routes } from '@angular/router';

export const SYLLABUS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/syllabus-explorer/syllabus-explorer')
        .then(m => m.SyllabusExplorerComponent)
  }
];