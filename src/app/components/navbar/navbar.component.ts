import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  // imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  isDesktop: boolean = window.innerWidth > 768;

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 768; // Actualiza el valor al cambiar el tamaño de la ventana
    });
  }
  
}
