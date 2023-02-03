import { IFilm } from 'src/app/models/ifilm';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-project';

  public comediaFilms : IFilm[] = [

    {
      name: "Casi 300",
      image: "../../assets/images/Comedia/casi300.webp",
      style: "Comedia",
    },
    {
      name: "Cazafantasmas",
      image: "../../assets/images/Comedia/cazafantasmas.webp",
      style: "Comedia",
    },
    {
      name: "El Dictador",
      image: "../../assets/images/Comedia/dictador.webp",
      style: "Comedia",
    },
    {
      name: "Erase Una Vez En Hollywood",
      image: "../../assets/images/Comedia/erasehollywood.webp",
      style: "Comedia",
    },
    {
      name: "Family Guy",
      image: "../../assets/images/Comedia/family guy.webp",
      style: "Comedia",
    },
    {
      name: "Juerga de Solteros",
      image: "../../assets/images/Comedia/juerga.webp",
      style: "Comedia",
    },
    {
      name: "La Terminal",
      image: "../../assets/images/Comedia/laterminal.webp",
      style: "Comedia",
    },
    {
      name: "Los Padres De Ella",
      image: "../../assets/images/Comedia/padresella.webp",
      style: "Comedia",
    },
    {
      name: "Regreso Al Futuro",
      image: "../../assets/images/Comedia/regresofuturo.webp",
      style: "Comedia",
    },    
  ]

  public terrorFilms : IFilm[] = [
    
    {
      name: "Apostol",
      image: "../../assets/images/Terror/apostol.jpg",
      style: "Terror",
    },
    {
      name: "La Calle Del Terror",
      image: "../../assets/images/Terror/calleterror.jpg",
      style: "Terror",
    },
    {
      name: "Infierno Bajo EL Agua",
      image: "../../assets/images/Terror/infiernoagua.webp",
      style: "Terror",
    },
    {
      name: "Insidious 2",
      image: "../../assets/images/Terror/insidious2.webp",
      style: "Terror",
    },
    {
      name: "Life",
      image: "../../assets/images/Terror/life.webp",
      style: "Terror",
    },
    {
      name: "Malasaña",
      image: "../../assets/images/Terror/malasana.webp",
      style: "Terror",
    },
    {
      name: "Multiple",
      image: "../../assets/images/Terror/multiple.webp",
      style: "Terror",
    },
    {
      name: "Reflejos",
      image: "../../assets/images/Terror/reflejos.webp",
      style: "Terror",
    },    
  ]
}
