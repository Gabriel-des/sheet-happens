import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonicModule],
  standalone: true
})
export class ButtonComponent  implements OnInit {

  @Input() text: string = 'Confirmar';
  constructor() { }

  ngOnInit() {}

}
