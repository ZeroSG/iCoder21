import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
      return sumCost + num*5

    },0)
  }
  
}
