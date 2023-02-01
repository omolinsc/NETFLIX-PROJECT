import { Component } from '@angular/core';
import { IFilm } from 'src/app/models/ifilm';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

public animeFilms : IFilm[] = [
    
    {
      name: "El Castillo Ambulante",
      image: "../../assets/images/Anime/castilloambulante.webp"
    },
    {
      name: "El Viaje De Chihiro",
      image: "../../assets/images/Anime/chihiro.webp"
    },
    {
      name: "La Princesa Mononoke",
      image: "../../assets/images/Anime/mononoke.webp"
    },
    {
      name: "Porco Rosso",
      image: "../../assets/images/Anime/porcorosso.webp"
    },
    {
      name: "Evangelion",
      image: "../../assets/images/Anime/evangelion.webp"
    },
    {
      name: "Ghost In The Shell: Arise",
      image: "../../assets/images/Anime/gitsarise.webp"
    },
    {
      name: "Ninokuni",
      image: "../../assets/images/Anime/ninokuni.jpg"
    },
    {
      name: "Perfect Blue",
      image: "../../assets/images/Anime/perfectblue.webp"
    },
    {
      name: "La Puta",
      image: "../../assets/images/Anime/laputa.webp"
    },
    
  ]
}
