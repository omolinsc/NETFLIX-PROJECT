import { Component } from '@angular/core';
import { IFilm } from 'src/app/models/ifilm';

@Component({
  selector: 'app-heroine',
  templateUrl: './heroine.component.html',
  styleUrls: ['./heroine.component.scss']
})
export class HeroineComponent {

  public heroineFilms : IFilm[] = [
    
    {
      name: "El Viaje De Chihiro",
      image: "../../assets/images/Anime/chihiro.webp"
    },
    {
      name: "Star Trek",
      image: "../../assets/images/Sci-fi/startrek.webp"
    },
    {
      name: "Watchmen",
      image: "../../assets/images/Sci-fi/watchmen.webp"
    },
    {
      name: "El CLub De La Lucha",
      image: "../../assets/images/Drama/clublucha.webp"
    },
    {
      name: "Salvar Al Soldado Ryan",
      image: "../../assets/images/Drama/salvaralsoldado.webp"
    },
  ]

  constructor () {
    console.log(this.heroineFilms);
  }

}