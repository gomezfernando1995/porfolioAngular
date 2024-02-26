import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowPasswordComponent } from '../window-password/window-password.component';

@Component({
  selector: 'app-navbar',
  standalone: false,
  // imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  c!:number;
  isDesktop: boolean = window.innerWidth > 768;

  constructor(private dialog: MatDialog){};

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 768; // Actualiza el valor al cambiar el tamaño de la ventana
    });
    this.c = 0;
  }

  increaseClick(){
    this.c++;
    if(this.c==3){
      this.openDialog_Password();
      this.c=0;
    }
  }

  openDialog_Password() {
    this.dialog.open(WindowPasswordComponent);
  }
  
}
