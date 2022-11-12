import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
@Component({
  selector: 'app-movieadd',
  templateUrl: './movieadd.component.html',
  styleUrls: ['./movieadd.component.css']
})
export class MovieaddComponent implements OnInit {
  moviedata: Movie = { id: 0, name: '', year: 0, rating: 0 }
  constructor() { }
  Savedata(data: Movie) {
    this.moviedata = data;
    console.log(this.moviedata)
  }
  ngOnInit(): void {
  }

}
