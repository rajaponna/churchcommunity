import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviedataService} from '../moviedata.service';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {
  npmovies:any=[];

  constructor(private _activatedRoute:ActivatedRoute, private _moviedataService:MoviedataService) { }

  ngOnInit() {
    // this._activatedRoute.params.subscribe((data)=>{
    //   console.log(data);
    // });

    this.npmovies=this._moviedataService.movies;


  }
  
  
}
