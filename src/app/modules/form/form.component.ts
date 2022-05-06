import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    form: FormGroup;
    phoneSubmitted: string;

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            phone: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
        });
    }

    getFormValidators(name: string) {
        return this.form?.controls[name];
    }

    lala() {
        this.phoneSubmitted = this.form.value.phone;
        this.createForm();
    }
}
