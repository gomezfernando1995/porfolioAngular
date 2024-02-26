import { Component} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {passWindow} from '../../../../noGit';

@Component({
  selector: 'app-window-password',
  standalone: true,
  imports: [ ReactiveFormsModule,MatFormFieldModule,MatInputModule,FormsModule,MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './window-password.component.html',
  styleUrl: './window-password.component.scss'
})
export class WindowPasswordComponent {

  public formClave: FormGroup = new FormGroup({
    clave: new FormControl('', [
      Validators.required,
    ]),
  });

  intentos:number=3;


  verificarPassword(){
    const pass: string = this.formClave.get('clave')?.value;
    if(pass==passWindow ){
      console.log("correcto")  
      localStorage.setItem('su', "true");
       window.location.reload();
    }
  }

  getErrorMessage(): string {
      return "Clave incorrecta ";
  }

}
