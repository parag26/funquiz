import {Injectable} from '@angular/core';
import {Http} from '@angular/Http'
import 'rxjs/add/operator/map';

@Injectable()
export class MoviedbService {
    searchstring: any;
    constructor(private http: Http) {
        
    }

    getActor(searchstring) {
        return this.http.get('https://api.themoviedb.org/3/search/person?query='+searchstring+'&api_key=3c01fcb05ec618731d1ad899c65d908e&language=en-US&page=1&include_adult=false')
                .map(res => res.json());
    }

    getQuiz(id:string) {
        return this.http.get('https://api.themoviedb.org/3/person/'+id+'?api_key=3c01fcb05ec618731d1ad899c65d908e&language=en-US')
                .map(res => res.json());
    }
}