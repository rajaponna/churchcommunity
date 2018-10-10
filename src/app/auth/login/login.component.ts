import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  loginform:any={}; 
  isLoggedIn:boolean= false;

  $authObservable : Subject<any>= new Subject();

  ngOnInit() {
  }
  login(){
    if(this.loginform.username && this.loginform.username){
      this.isLoggedIn=true;
      if(this.isLoggedIn){
        this._router.navigate(['/home']);
        this.$authObservable.next(this.isLoggedIn)
      }
    }
    else{
      alert('Invalid Credentials');
    }
  }

}
