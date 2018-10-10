import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
 
import { AppComponent } from './app.component';
import { NowplayingComponent } from './movies/nowplaying/nowplaying.component';
import { PopularComponent } from './movies/popular/popular.component';
import { TopratedComponent } from './movies/toprated/toprated.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { DetailsComponent } from './movies/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NowplayingComponent,
    PopularComponent,
    TopratedComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"nowplaying", component:NowplayingComponent},
      {path:"nowplaying/movies/:mcode", component:DetailsComponent},
      {path:"toprated", component:TopratedComponent},
      {path:"home", component:HomeComponent},
      {path:"login", component:LoginComponent},
      {path:"popular", component:PopularComponent},
      {path:"", redirectTo:"home", pathMatch:'full'},
      {path:"**", redirectTo:"home"}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
