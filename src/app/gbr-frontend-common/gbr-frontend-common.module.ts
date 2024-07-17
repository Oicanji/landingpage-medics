import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextOutdoorComponent } from './text-outdoor/text-outdoor.component';
import { GbrInputComponent } from './gbr-input/gbr-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TextOutdoorComponent, GbrInputComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TextOutdoorComponent, GbrInputComponent],
})
export class GbrFrontendCommonModule {}
