import { Component, Input } from '@angular/core';
import { Daum } from './person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [
    `
      .person {
        width: 300px;
        margin-bottom: 10px;
        padding: 10px;
        background-color: cadetblue;
        color: white;
        border-radius: 5px;
      }

      .name {
        font-weight: 600;
        font-size: 20px;
        color: #1e293b;
        text-align: center;
      }
    `,
  ],
})
export class PersonComponent {
  @Input() person!: Daum;
}
