import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{title}}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit{
  title: string;

  constructor(){
    this.title = 'I Love Angular'
  }

  changeTitle(newTitle: string){
    this.title = newTitle;
  }

  ngOnInit(): void {
    this.changeTitle('Changed title through method.');
  }

  
}
