import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from 'src/app/user/user.component';
import { QuerstionsComponent } from '../querstions/querstions.component';
const routes: Routes = [
  {path : "user" , component : UserComponent},
  {path : "questions",component : QuerstionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MCQRoutingModule { }
