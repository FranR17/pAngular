import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Web de Mauro Fialho',
      description: 'Web diseñada para un culturista profesional.',
      image: 'assets/images/project1.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      link: 'https://maurofialho.com'
    },
    {
      id: 2,
      title: 'Zara',
      description: 'Actualizaciones y mejoras necesarias tras nueva temporada',
      image: 'assets/images/project2.jpg',
      technologies: ['React', 'Firebase', 'CSS3'],
      link: 'https://www.zara.com/es/'
    },
    {
      id: 3,
      title: 'Raccoon Games',
      description: 'Tienda online de una empresa relacionada con productos de anime',
      image: 'assets/images/project3.jpg',
      technologies: ['HTML5', 'CSS3', 'Angular'],
      link: 'https://www.raccoongames.es'
    }
  ];

  selectedProject: Project | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // Solo ejecuta setupMasonryLayout si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.setupMasonryLayout();
    }
  }

  showProjectDetails(project: Project): void {
    this.selectedProject = project;
    // Solo accede a document si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const modal = document.getElementById('projectModal');
      if (modal) {
        (modal as HTMLElement).style.display = 'flex';
      }
    }
  }

  closeModal(): void {
    this.selectedProject = null;
    // Solo accede a document si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const modal = document.getElementById('projectModal');
      if (modal) {
        (modal as HTMLElement).style.display = 'none';
      }
    }
  }

  setupMasonryLayout(): void {
    // Solo se ejecuta en el navegador
    setTimeout(() => {
      const grid = document.querySelector('.projects-grid');
      // Implementa aquí tu código de Masonry si lo usabas
    }, 100);
  }
}
