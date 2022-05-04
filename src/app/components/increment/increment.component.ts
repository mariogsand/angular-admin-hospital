import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit  {

  // @Input() progress: number = 50;
  @Input('value') progress: number = 50;
  @Input() btnClassName: string = 'btn-primary';
  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.btnClassName = `btn ${this.btnClassName}`
  }

  progressIncrement = () => {
    if (this.progress >= 100 && this.progress >= 0) {
      this.progress = 100;
      return this.changeValue.emit(100);
    }
    this.progress += 5;
    return this.changeValue.emit(this.progress);
  };

  progressDecrement = () => {
    if(this.progress <= 0) {
      this.progress = 0;
      return this.changeValue.emit(0);
    }
    this.progress -= 5;
    return this.changeValue.emit(this.progress);
  };

  onChange( value: number ) {
    if(value >= 100) {
      this.progress =100;
    } else if(value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }

    this.changeValue.emit(this.progress);
  }
}
