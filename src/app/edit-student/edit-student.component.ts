import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  nameFormControl = new FormControl(null,Validators.required)
  emailFormControl = new FormControl(null,[Validators.required, Validators.email])
  telFormControl = new FormControl(null,Validators.required)
  
  editStudentConditionFormGroup = new FormGroup({
    // name: new FormControl(null,Validators.required),
    // email: new FormControl(null,Validators.required),
    // tel: new FormControl(null,Validators.required)
    id: new FormControl(),
    version: new FormControl(),
    name: this.nameFormControl,
    email: this.emailFormControl,
    tel: this.telFormControl,
  });

  constructor(
    private http: HttpClient,
    private messageService: MessageService, 
    private router:Router,
    private appComponent:AppComponent, ) {
      // console.log(this.appComponent.editStudent)
      // this.nameFormControl.setValue('BoppinCode');
    const student = this.appComponent.editStudent;
    if(student){
      // this.nameFormControl.setValue(student.name);
      // this.emailFormControl.setValue(student.email);
      // this.telFormControl.setValue(student.tel);
       this.editStudentConditionFormGroup.patchValue(student);
    }
   }

  ngOnInit(): void {
  }
  saveStudent(){
    // console.log(this.addStudentConditionFormGroup.value)
    const student = this.editStudentConditionFormGroup.value;
 //{name: '',tel}
    this.http.put('/training-demo/student',student)
    .subscribe(respones=>{
    //  console.log('บันทึกสำเส็จ')
      this.messageService.add({
        severity:'success', 
        summary: 'Success',
         detail: 'สำเร็จแล้ว'});
         this.editStudentConditionFormGroup.patchValue({
           version:respones });
      // this.router.navigate(['student']);
    },
    (error: HttpErrorResponse)=>{
      this.messageService
      .add({
        severity:'error', 
      summary: 'Error', 
      detail: error.statusText
    });
  }
    );}
  resetStudent(){
    this.editStudentConditionFormGroup.reset();
  }

}
