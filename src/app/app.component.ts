import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'porfolio';

  constructor(private http: HttpClient){
    this.wakeUpServer();
  }

  wakeUpServer(): void {
    this.http.get('https://api-email-porfolio.onrender.com/api/dummy')
      .subscribe(() => console.log('Servidor despertado'));
  }

}
