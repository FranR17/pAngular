import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  skills: any[] = [
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'Angular', percentage: 70 },
    { name: 'Responsive Design', percentage: 95 }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // Solo ejecuta animateOnScroll si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.animateOnScroll();
    }
  }

  animateOnScroll(): void {
    // Esta función solo se ejecutará en el navegador
    window.addEventListener('scroll', () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    });
  }
}
