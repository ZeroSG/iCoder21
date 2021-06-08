import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma4jay3',
  templateUrl: './ma4jay3.component.html',
  styleUrls: ['./ma4jay3.component.css']
})
export class Ma4jay3Component implements OnInit {
  result = 0;

  calcu(){
  }
  calB(value: string){
    /**
  *! แปลค่า result = 0;ที่เป็น Number เป็น string โดย
  *! 1.const price = Number(value); 
  *!   this.result =(price*3)/4
  *! 2.this.result =Number(value*3)/4
  *! 3.this.result =(+value*3)/4
  **/
    const price = Number(value);

    this.result =(price*3)/4
  }
  constructor() { }

  ngOnInit(): void {
  }

}
