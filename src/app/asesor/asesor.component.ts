import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asesor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asesor.component.html',
  styleUrl: './asesor.component.css'
})
export class AsesorComponent implements OnInit, OnDestroy{
  currentTime: string = '';
  private timer: any;

  ngOnInit() {
    this.updateClock();
    // Creamos el intervalo y lo guardamos en una variable
    this.timer = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  ngOnDestroy() {
    // Limpiamos el intervalo cuando el usuario se va del componente
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateClock() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });
  }
}
