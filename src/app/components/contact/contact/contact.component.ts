import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialogo/dialog/dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  standalone: false,
  // imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public formEmail: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  correo: any = this.formEmail.get('email');
  nombre: any = this.formEmail.get('name');
  isDesktop: boolean = window.innerWidth > 900;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth > 900; // Actualiza el valor al cambiar el tamaño de la ventana
    });
  }

  ngOnInit() {
    this.formEmail.reset();
    
  }

  getErrorMessage(tipo: number, msj: string): string {
    if (tipo == 1 && this.nombre.hasError('required')) {
      return msj;
    } else if (tipo == 2 && this.correo.hasError('required')) {
      return msj;
    }
    return '';
  }

  send() {
    if (this.formEmail.valid) {
      const formData = {
        name: this.formEmail.get('name')?.value,
        from: this.formEmail.get('email')?.value,
        subject: this.formEmail.get('subject')?.value,
        message: this.formEmail.get('message')?.value,
      };

      console.log(formData.message);
      console.log(formData.name);

      this.spinner.show();

      this.http
        .post('https://api-email-porfolio.onrender.com/api/sendEmail', formData)
        .subscribe(
          () => {
            console.log('Correo enviado exitosamente');
            this.cleanInput();
            this.openDialog();
          },
          (error) => {
            console.error('Error al enviar el correo:', error);
          }
        )
        .add(() => {
          this.spinner.hide();
        });
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  cleanInput() {
    this.formEmail.get('name')?.setValue(''),
      this.formEmail.get('email')?.setValue(''),
      this.formEmail.get('subject')?.setValue('');
    this.formEmail.get('message')?.setValue('');
  }
}
