import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  /**
   * ! เข้า URL student แสดงผล component StudentComponent
   */
  {path:'student',component:StudentComponent},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddstudentComponent},
  {path:'pokemon',component:PokemonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
