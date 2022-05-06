import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanadaPhoneDirective } from './canada-phone.directive';



@NgModule({
    declarations: [
        CanadaPhoneDirective
    ],
    exports: [
        CanadaPhoneDirective
    ],
    imports: [
        CommonModule
    ]
})
export class CanadaPhoneModule { }
