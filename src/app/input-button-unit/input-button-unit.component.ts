import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <div style="overflow: hidden;">

  <input class="todo-input"
          #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue($event.target.value); clearValue()">

    <button class="btn" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
</div>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>;
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  clearValue():void{
    this.title = "";
  }
}