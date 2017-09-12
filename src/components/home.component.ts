import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MoviedbService} from '../services/moviedb.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchstring: any;
  actors: Object;
  constructor(private moviedbservice:MoviedbService) {

  }

  getActors(){
    this.moviedbservice.getActor(this.searchstring).subscribe(res => {
      this.actors = res.results;
      console.log(this.actors);
    });
  }

}
