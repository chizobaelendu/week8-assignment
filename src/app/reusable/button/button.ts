import { NgClass } from '@angular/common';
//Import Input, Output decorator, and EventEmitter.
//Decorator and signal flow are functions that allows us define (create) properties that are accessible WITHIN a component and the PARENT components.
//Decorator (depreciated/outdated) or signal flow allows us apply distinct features and behaviours on components as we reuse them across different sections of an application.
//Input decorator is used for defining input properties e.g input from form, API, etc. 
//While Output decorator is used for defining output properties e.g event emitter, etc.
import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})

export class Button {
  //Define the component's decorator properties.
  //Input decorator CAN be configured with various options such as required, transform, etc.
  //While Output decorator CANNOT be configured.
  @Input() buttonText:string = "";
  @Input() buttonBgColor:string = ""; 
  @Input() buttonWidthInPx:number = 0; 
  //Create event emitter
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    //Emit (broadcast) click event
    this.buttonClick.emit();
  };

  /*
  buttonBgColor = input.required<string>();
  buttonText = input.required<string>();
  Navclick = output<void>();
   @Output() Navclick = new EventEmitter<void>();

  onNavClick() {
    this.Navclick.emit();
  }

  ngOnInit(): void {
    console.log(this.buttonText());
  }
  */
}
