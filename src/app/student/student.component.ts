import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { responseStudentAll, Student} from '../studernt';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  
  students: Student[] = [
    {
      name: 'Oom',
      email: 'oomkano111@gmail.com',
      tel: 'xxx-x63-6541'
    },{
      name: 'Oom',
      email: 'oomkano111@gmail.com',
      tel: 'xxx-x63-6541'
    },{
      name: 'Oom',
      email: 'oomkano111@gmail.com',
      tel: 'xxx-x63-6541'
    },{
      name: 'Oom',
      email: 'oomkano111@gmail.com',
      tel: 'xxx-x63-6541'
    },{
      name: 'Oom',
      email: 'oomkano111@gmail.com',
      tel: 'xxx-x63-6541'
    },{
      name: 'Oom',
      email: 'oomkano111@gmail.com',
      tel: 'xxx-x63-6541'
    }
    
  ]

  pokemonUrl:string = '';
 

  constructor(public http: HttpClient) {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto')
    .subscribe(res=>
      {
        this.pokemonUrl=res.sprites.front_default;
      })
   }

  ngOnInit(): void {
  }
  queryS(){
    this.http.get<responseStudentAll>('/training-demo/student/all')
    .subscribe(response=>{

    });
  }  
}
