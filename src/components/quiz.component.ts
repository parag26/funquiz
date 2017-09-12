import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MoviedbService} from '../services/moviedb.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  quiz: Object;
  answer1:any;
  answer2:any;
  bday: any;
  nickname: any;

  constructor(private moviedbservice:MoviedbService,private router:ActivatedRoute,) {

  }

  ngOnInit(){
    this.router.params.subscribe((params) => {
        let id = params['id'];
        this.moviedbservice.getQuiz(id).subscribe(movie => {
            console.log(movie);
            this.bday = movie.birthday; 
            this.nickname = movie.also_known_as[0];
            this.quiz = movie;
        });
    });
  }

  check1() {
    if(this.answer1 == this.bday){
      alert('Correct Answer');
    } else {
      alert('Wrong Answer');
    }
  }

  check2() {
    if(this.answer2 == this.nickname){
      alert('Correct Answer');
    } else {
      alert('Wrong Answer');
    }
  }
}
