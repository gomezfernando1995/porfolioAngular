import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: false,
  // imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  age!: string;
  isDesktop: boolean = window.innerWidth > 768;

  constructor() {
    this.myAge();
  }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 768; // Actualiza el valor al cambiar el tamaño de la ventana
    });
  }

  myAge() {
    let fecha1: Date = new Date(1995, 10, 20); // 1 de enero de 2000
    let fecha2: Date = new Date(); // Fecha actual

    let diferenciaEnMilisegundos: number = fecha2.getTime() - fecha1.getTime();
    let diferenciaEnAños: number =
      diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25);

    this.age = Math.round(diferenciaEnAños).toString();
  }
}
