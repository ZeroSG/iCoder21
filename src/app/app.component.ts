import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StudentModel } from './studernt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit{
  title = 'iCoder2021';
  result = 0;
  actionBN1 = 0;
  actionBN2 = 10;
  actionBN3 = 200;
  fiveBahtL = [4,10,8,20,50];
  oneBahtL: Number[] = [];
  summ = 0;

  editStudent: StudentModel| null =null;
  

  ngOnInit(): void {
    this.sumR();
  }
  sumR(){
    this.result = this.actionBN1+this.actionBN2+this.actionBN3
  }
  transform5BahtToBaht(){
    this.oneBahtL =this.fiveBahtL.map(num=>{
      return num*5
    })
  }
  sum5BahtToBaht(){
   this.summ = this.fiveBahtL.reduce((sumCost,num)=>{
     //fiveBahtL = [4,10,8]; 
     // sumCost = 0 num 4 return 0+4*5 
     // sumCost = 20 num 10 return 20+10*5 
     // sumCost = 70 num 8 return 70+8*5 
     // ค่าสุดท้ายใส่ไหใน summ
      return sumCost + num*5

    },0 //sumCost = 0
    )
  }
  
}
