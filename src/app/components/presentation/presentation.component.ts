import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-presentation',
  standalone: false,
  // imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  suLocalStorage!:string;
  age!: string;
  isDesktop: boolean = window.innerWidth > 768;
  descripcion_breve = "Soy estudiante de Analista de Sistemas  y  empleado en el   sector de Infraestructura de Redes   . En mi tiempo libre perfecciono mis  habilidades como desarrollador Fullstack usando tecnologías como  Angular y  Node.js. Siempre estoy buscando nuevas metas para crecer profesionalmente y expandir mis habilidades en el campo de la tecnología.";
  // descripcion_breve = " Soy estudiante de <strong>Analista de Sistemas</strong>  y  empleado en el   sector de <strong>Infraestructura de Redes</strong>   . En mi tiempo libre perfecciono mis  habilidades como desarrollador Fullstack usando tecnologías como  <strong>Angular</strong> y <strong> Node.js </strong>.  Siempre estoy buscando nuevas oportunidades para crecer profesionalmente y   expandir mis habilidades en el campo de la tecnología.";

  constructor(public spinner: NgxSpinnerService) {
    this.myAge();
  }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 768; // Actualiza el valor al cambiar el tamaño de la ventana
    });
    this.suLocalStorage=localStorage.getItem('su') || 'false';
  }

  myAge() {
    let fecha1: Date = new Date(1995, 10, 20); // 1 de enero de 2000
    let fecha2: Date = new Date(); // Fecha actual

    let diferenciaEnMilisegundos: number = fecha2.getTime() - fecha1.getTime();
    let diferenciaEnAños: number =
      diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25);

    this.age = Math.round(diferenciaEnAños).toString();
  }

  editClick(){
    localStorage.setItem('su','false');
    window.location.reload();
  }
 
}
