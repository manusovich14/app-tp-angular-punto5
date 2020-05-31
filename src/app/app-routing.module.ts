import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ImageComponent} from './components/image/image.component';
import {RegistroComponent} from './components/registro/registro.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'image', component: ImageComponent},
  {path: 'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
