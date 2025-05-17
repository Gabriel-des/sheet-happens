import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  standalone: true
})
export class InputComponent  implements OnInit {

  @Input() type: string = 'text';
  @Input() placeholder: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
