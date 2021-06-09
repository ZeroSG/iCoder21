import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css'],

})
export class AddstudentComponent implements OnInit {

  nameFormControl = new FormControl(null,Validators.required)
  emailFormControl = new FormControl(null,[Validators.required, Validators.email])
  telFormControl = new FormControl(null,Validators.required)
  
  addStudentConditionFormGroup = new FormGroup({
    // name: new FormControl(null,Validators.required),
    // email: new FormControl(null,Validators.required),
    // tel: new FormControl(null,Validators.required)
    name: this.nameFormControl,
    email: this.emailFormControl,
    tel: this.telFormControl,
  });

  constructor(private http: HttpClient,
    private messageService: MessageService, 
    private router:Router) { }

  ngOnInit(): void {
  }
  saveStudent(){
    // console.log(this.addStudentConditionFormGroup.value)
    const student = this.addStudentConditionFormGroup.value;

    this.http.post('/training-demo/student',student)
    .subscribe(respones=>{
     console.log('บันทึกสำเส็จ')
      this.messageService.add({severity:'success', summary: 'Success', detail: 'สำเร็จแล้ว'});
      this.router.navigate(['student']);
    })
  }
  resetStudent(){
    this.addStudentConditionFormGroup.reset();
  }

}
