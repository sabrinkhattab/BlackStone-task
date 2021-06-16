import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import {MessagesComponent} from '../app/pages/messages/messages.component'

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'messages', component:MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
