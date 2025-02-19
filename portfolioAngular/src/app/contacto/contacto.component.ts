import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  formSubmitted = false;
  formError = false;

  constructor() { }

  submitForm(): void {
    // Validación básica
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.formError = true;
      return;
    }

    // Aquí normalmente enviarías los datos a un servidor
    // Por ahora, simularemos un envío exitoso
    console.log('Formulario enviado:', this.contactForm);

    // Simulación de envío exitoso
    setTimeout(() => {
      this.formSubmitted = true;
      this.formError = false;

      // Resetear el formulario
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }, 1000);
  }
}
