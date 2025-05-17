import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [IonicModule],
  standalone: true
})
export class InputComponent  implements OnInit {

  @Input() type: string = 'text';

  constructor() { }

  ngOnInit() {}

}
