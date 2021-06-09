import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';
import { ResponseStudentAll,  Student, StudentAllCondition, StudentModel} from '../studernt';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  
  
  // students: Student[] = [
  //   {
  //     name: 'Oom',
  //     email: 'oomkano111@gmail.com',
  //     tel: 'xxx-x63-6541'
  //   },{
  //     name: 'Oom',
  //     email: 'oomkano111@gmail.com',
  //     tel: 'xxx-x63-6541'
  //   },{
  //     name: 'Oom',
  //     email: 'oomkano111@gmail.com',
  //     tel: 'xxx-x63-6541'
  //   },{
  //     name: 'Oom',
  //     email: 'oomkano111@gmail.com',
  //     tel: 'xxx-x63-6541'
  //   },{
  //     name: 'Oom',
  //     email: 'oomkano111@gmail.com',
  //     tel: 'xxx-x63-6541'
  //   },{
  //     name: 'Oom',
  //     email: 'oomkano111@gmail.com',
  //     tel: 'xxx-x63-6541'
  //   }
    
  // ]
  studentModels: StudentModel[]=[]

  nameFormControl = new FormControl()
  emailFormControl = new FormControl()
  telFormControl = new FormControl()

  studentConditionFormGroup = new FormGroup({
    name:this.nameFormControl,
    email:this.emailFormControl,
    tel:this.telFormControl
  });

 

  constructor(public http: HttpClient,
    private messageService: MessageService,
    private router:Router,
    private appComponent:AppComponent, ) {
      // console.log(this.appComponent.editStudent)
      // this.nameFormControl.setValue('BoppinCode');
    const student = console.log(this.appComponent.editStudent)
    
   }

  ngOnInit(): void {
  }
  queryS(){
    // this.http.get<ResponseStudentAll>('/training-demo/student/all')
    // .subscribe(response=>{
    //   this.studentModels=response.result
    // });
    console.log(this.nameFormControl.value)
    console.log(this.emailFormControl.value)
    console.log(this.telFormControl.value)

    const name = this.nameFormControl.value;
    const email = this.emailFormControl.value;
    const tel = this.telFormControl.value;


    //ค้นหา
    //reactive from module
    //     @Directive()
    // formGroup
    // formControl
    // formArrayName
    // formControlName
    // formGroupName
    const condition:StudentAllCondition = {};



    if(name!==null){
      condition.name = name;
    }
    if(email!==null){
      condition.email = email;
    }
    if(tel!==null){
      condition.tel = tel;
    }

    // condition ={name:'123' , email:'1234', tel:'1234'}
        const httpParams = new HttpParams({fromObject:(condition as any)});
        // ?name=123&email=1234&tel=1234
    this.http.get<ResponseStudentAll>('/training-demo/student/all',{
      params: httpParams
    })
    //Observable RxJS
    .subscribe(
      
      response=>{
      this.studentModels = response.result
    },
    (error: HttpErrorResponse)=>{
      this.messageService
      .add({
        severity:'error', 
      summary: 'Error', 
      detail: error.statusText
    });

    }
    
    
    );

    //Promise 
  }  
  clearS(){
    //ล้างข้อมูลตาราง
    this.studentModels = [];
    //ล้างข้อมูลช่อง
    // this.nameFormControl.reset();
    // this.emailFormControl.reset();
    // this.telFormControl.reset();
    this.studentConditionFormGroup.reset();

    
  }
  
  deleteS(student: StudentModel){
    this.http.delete(`/training-demo/student/${student.id}`)
    .subscribe(res=>{this.messageService.add({
      severity:'success', 
    summary: 'Success', 
    detail: 'ลบสำเร็จแล้ว'});

    const index = this.studentModels
    .findIndex(modul=>modul.id===student.id)

    if(index>=0){
      this.studentModels.splice(index,1)
    }




    this.queryS();
  });
    
  }
  editS(student: StudentModel){
    this.appComponent.editStudent = student
    this.router.navigate(['/edit'])
  }
}
