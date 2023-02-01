import { Component } from '@angular/core';
import { IFilm } from 'src/app/models/ifilm';

@Component({
  selector: 'app-films2',
  templateUrl: './films2.component.html',
  styleUrls: ['./films2.component.scss']
})
export class Films2Component {

public actionFilms : IFilm[] = [
    
    {
      name: "Kill Bill 2",
      image: "../../assets/images/Accion/killbill2.webp"
    },
    {
      name: "Guerra Mundial Z",
      image: "../../assets/images/Accion/worldwarz.webp"
    },
    {
      name: "Jack Reacher",
      image: "../../assets/images/Accion/jackreacher.webp"
    },
    {
      name: "El Ejercito De Los Muertos",
      image: "../../assets/images/Accion/ejercitomuertos.jpg"
    },
    {
      name: "El Protector",
      image: "../../assets/images/Accion/elprotector.webp"
    },
    {
      name: "Equalizer 2",
      image: "../../assets/images/Accion/equalizer2.webp"
    },
    {
      name: "Missión Imposible: Nación Secreta",
      image: "../../assets/images/Accion/misionimposiblenacion.webp"
    },
    {
      name: "John Wick 2",
      image: "../../assets/images/Accion/johnwick2.webp"
    },
    {
      name: "Terminator 2",
      image: "../../assets/images/Accion/terminator2.webp"
    },
    
  ]
}
