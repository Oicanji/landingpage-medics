import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { LoginRoutingModule } from './login.routing.module';
import { FormsModule } from '@angular/forms';
import { GbrFrontendCommonModule } from '../gbr-frontend-common/gbr-frontend-common.module';

@NgModule({
  declarations: [PageLandingComponent],
  imports: [
    GbrFrontendCommonModule,

    CommonModule,
    LoginRoutingModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
