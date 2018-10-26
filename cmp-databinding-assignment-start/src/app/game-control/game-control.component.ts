import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

 startCounter() {
   this.interval = setInterval(() => {
    this.intervalFired.emit(this.counter ++);
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.interval);
  }

 }




  // Create interval that counts a number, pass number into each odd or even component,
  // generate component and destory for each odd/even number

