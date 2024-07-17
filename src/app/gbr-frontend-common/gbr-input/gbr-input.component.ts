import { Component, Input } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'gbr-input',
  templateUrl: './gbr-input.component.html',
  styleUrls: ['./gbr-input.component.scss'],
})
export class GbrInputComponent {
  @Input() name!: string;
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() label: string = 'Input example';
  @Input() placeholder: string = 'Type here...';
  @Input() type: string = 'text';

  @Input() eyeIcon: boolean = false;
  @Input() eyeIconAction: () => void = () => {};
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  handleClickOnEye() {
    this.eyeIcon = !this.eyeIcon;
    this.type = this.eyeIcon ? 'text' : 'password';

    this.eyeIconAction && this.eyeIconAction();
  }
}
