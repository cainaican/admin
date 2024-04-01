import { Component } from '@angular/core';

export interface TextboxModel {

}

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent<TextboxModel> {

}
