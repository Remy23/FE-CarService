import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  datos: any = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.recentAppointment();
  }

  recentAppointment(){
    this.api.getRecentAppointment().subscribe({
      next: (res) => {
        this.datos = res;
        console.log("Obteniendo citas recientes." + res);
      },
      error: (err) => {
        console.error("Error al traer las citas recientes", err);
      }
    });
  }



}
