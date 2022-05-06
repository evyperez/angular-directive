import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanadaPhoneModule } from 'src/app/shared/directives/canada-phone/canada-phone.module';

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        CommonModule,
        FormRoutingModule,
        FormsModule,
        CanadaPhoneModule,
        ReactiveFormsModule,
    ]
})
export class FormModule { }
