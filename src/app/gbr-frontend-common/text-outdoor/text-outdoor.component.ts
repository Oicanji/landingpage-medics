import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-outdoor',
  templateUrl: './text-outdoor.component.html',
  styleUrls: ['./text-outdoor.component.scss'],
})
export class TextOutdoorComponent {
  @Input() message: string = 'Default Message';
  @Input() backgroundImage: string = 'default-image.jpg';
  @Input() customStyles: { [key: string]: string } = {};
}
