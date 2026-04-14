import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Esto es vital en las versiones nuevas
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './app.component.css' // Nota: En v18 es 'styleUrl' (singular)
})
export class HomeComponent { 
  title = 'citas-servicio-app';

  handleLogin(event: Event, targetUrl: string) {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const submitBtn = form.querySelector('button') as HTMLButtonElement;
    
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Verificando...';
    }

    setTimeout(() => {
      // Por ahora usamos redirección simple, luego usaremos el Router de Angular
      window.location.href = targetUrl;
    }, 1200);
  }
}
