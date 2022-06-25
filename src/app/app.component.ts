import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName='Joaquim';
 infoUser={
  data:'07/08/1960',
  cargo:'Gerente',
 };
 infoEmpresa={
  empresa:'Vivo',
  bloco: 'C',
 }
  title = 'curso-angular';
}
