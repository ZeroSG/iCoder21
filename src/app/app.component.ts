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

  ngOnInit(): void {
    this.sumR();
  }
  sumR(){
    this.result = this.actionBN1+this.actionBN2+this.actionBN3
  }
  
}
