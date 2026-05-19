import { Component,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Primer Curso de Angular';
   nombre: string = 'Alicia Benitez';
    cambiarNombre() {
    this.nombre = 'María Camila Rollero';}
  imageUrl: string = "assets/images/imagen1.png";

}





 
