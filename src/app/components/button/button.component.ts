import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() color: string = 'primary';
  @Input() bgColor: string = 'primary';
  @Input() size: string = 'default';
  @Input() disabled: boolean;
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public onClick() {
    this.buttonClicked.emit();
  }

}
