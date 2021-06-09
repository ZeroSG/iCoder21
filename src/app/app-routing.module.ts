import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemongoComponent } from './pokemongo/pokemongo.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  /**
   * ! เข้า URL student แสดงผล component StudentComponent
   */
   {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'student',component:StudentComponent},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddstudentComponent},
  {path:'edit',component:EditStudentComponent},
  {path:'pokemon',component:PokemonComponent},
  {path:'pokemonGo',component:PokemongoComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
