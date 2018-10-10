import { Component, OnInit } from '@angular/core';
import {MoviedataService} from '../moviedata.service';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  pmovies:any=[];
  popmovies:any=[];
  constructor(private _moviedataService:MoviedataService) { }

  ngOnInit() {
    this.pmovies= this._moviedataService.movies;
    for(let i=0;i<this.pmovies.length;i++){
      if(this.pmovies[i].popularity>=60){
        this.popmovies.push(this.pmovies[i]);
      }
    }
    
  }
}
