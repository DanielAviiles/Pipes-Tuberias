import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre            = 'Capitán América';
  nombre2           = 'daNieL avILes';
  arreglo: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number        = Math.PI;
  porcentaje        = 0.234;
  salario           = 1234.5;
  fecha: Date       = new Date();
  idioma            = 'es';
  videoUrl          = 'https://www.youtube.com/embed/deK_HcoPRGw';
  activar           = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      direccion: 'Calle 47',
      casa: 20
    }
  };
}
