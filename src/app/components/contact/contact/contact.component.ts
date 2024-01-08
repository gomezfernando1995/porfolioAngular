import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  correo: any = this.formEmail.get('email');
  nombre: any = this.formEmail.get('name');

  constructor(private http: HttpClient) {}

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
    const msj = this.formEmail.get('message')?.value;
    const name = this.formEmail.get('name')?.value;
    const email = this.formEmail.get('email')?.value;

    if (this.formEmail.valid) {
      this.http
        .post('https://formspree.io/f/{moqgqzlp}', this.formEmail.value)
        .subscribe(
          (response) => {
            // Manejar la respuesta
            console.log(response);
          },
          (error) => {
            // Manejar el error
            console.error(error);
          }
        );
    }
  }
}
