import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: PresentationComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'notfound', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
