import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  @Input() step:number = 1;
  @Input() notBelow:number = 0;
  @Input() notMore:null|number = null;
  @Output() numberChange = new EventEmitter
  @Input() counter = 0;
  @Input() get number(){
    return this.counter;
  }
  set number(value: number){
    this.counter = value;
  }
  constructor() { }

  // _comN = 'action-bar';
  // get comN(){
  //   return 
  // }

  ngOnInit(): void {
  }

  decrease(){
    if(this.counter - this.step >= this.notBelow){
    this.counter = this.counter - this.step;
  }
  this.numberChange.emit(this.counter);
}

  increase(){
    if(this.notMore === null){
      this.counter = this.counter + this.step;
  }else if((this.counter+this.step)<=this.notMore){
    this.counter = this.counter + this.step;
  }
  this.numberChange.emit(this.counter);
}
}
