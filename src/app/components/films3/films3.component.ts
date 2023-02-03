import { IFilm } from 'src/app/models/ifilm';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films3',
  templateUrl: './films3.component.html',
  styleUrls: ['./films3.component.scss']
})
export class Films3Component {

  @Input() public Films : IFilm[] = [];
  // @Input() public terrorFilms : IFilm[] = [];

}
