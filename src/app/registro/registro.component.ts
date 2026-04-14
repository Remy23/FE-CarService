import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{
  //Get Advisers
  listaAsesores: any[] = [];

  //Save Appontment
  modeloRegistro = {
    name: '',
    phone: '',
    email: '',
    year: '',
    brand: '',
    model: '',
    date: '',
    hour: '-1',
    adviser: '-1',
    description: ''
  };
  
  constructor(private api: ApiService) { }

  confirmarCita() {

    if (!this.modeloRegistro.name || !this.modeloRegistro.phone || !this.modeloRegistro.email || !this.modeloRegistro.year
      || !this.modeloRegistro.brand || !this.modeloRegistro.model || !this.modeloRegistro.date || this.modeloRegistro.hour == '-1'
      || this.modeloRegistro.adviser == '-1' || !this.modeloRegistro.description) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    console.log('Enviando datos...', this.modeloRegistro);
    
    // 3. Llamada mágica a la API
    this.api.enviarRegistro(this.modeloRegistro).subscribe({
      next: (respuesta) => {
        this.modeloRegistro = {
          name: '',
          phone: '',
          email: '',
          year: '',
          brand: '',
          model: '',
          date: '',
          hour: '-1',
          adviser: '-1',
          description: ''
        };
        alert('Cita registrada con éxito.');
        console.log('Respuesta del servidor:', respuesta);
      },
      error: (error) => {
        alert('Hubo un error al conectar con el servidor');
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.cargarDatosIniciales();
  }

  cargarDatosIniciales() {
    this.api.obtenerAsesores().subscribe({
      next: (res) => {
        this.listaAsesores = res;
        console.log("Asesores cargados con éxito");
      },
      error: (err) => {
        console.error("Error al traer asesores de Quarkus", err);
      }
    });
  }


}