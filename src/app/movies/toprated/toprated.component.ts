import { Component, OnInit } from '@angular/core';
import {MoviedataService} from '../moviedata.service';


@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {
  trmovies:any=[];
  topmovies:any=[];
  constructor(private _moviedataService:MoviedataService) { }

  ngOnInit() {
    this.trmovies= this._moviedataService.movies;
    for(let i=0;i<this.trmovies.length;i++){
      if(this.trmovies[i].rating>=3){
        this.topmovies.push(this.trmovies[i]);
      }
    }
  }
}
