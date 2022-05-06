import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[appCanadaPhone]'
})
export class CanadaPhoneDirective {
    constructor(private ngControl: NgControl, private renderer: Renderer2, private elementRef: ElementRef) { }

    @HostListener('input', ['$event.target.value']) onInput(value: string) {
        const pure = this.filter(value);
        this.onChangeCallback(pure);
        this.writeValue(pure);
    }

    writeValue(value: any): void {
        if (value) {
            const newValue = value.toString();
            let first = '';
            let second = '';
            let last = '';

            first = newValue.slice(0, 3);
            second = newValue.slice(3, 6);
            last = newValue.slice(6, 10);
            if (first.charAt(0) === '1') {
                this.renderer.setProperty(this.elementRef.nativeElement, 'value', '');
                first = first.replace('1', '');
            }
            if (newValue.length > 3 && newValue.length < 10) {
                if (second === '') {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'value', `(${first})`);
                } else if (last === '') {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'value', `(${first}) ${second}`);
                } else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'value', `(${first}) ${second}-${last}`);
                }
            }
        } else {
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', '');
        }
    }

    filter(value: string): any {
        value = value.replace(/\D/g, '');
        return value ? value : '';
    }

    onChangeCallback(value: string) {
        if (value.charAt(0) === '1') {
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', '');
            value = value.replace('1', '');
        }
        this.ngControl?.control?.patchValue(value, {
            emitModelToViewChange: false,
        });
    }
}
