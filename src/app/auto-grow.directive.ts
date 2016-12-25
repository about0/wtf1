import {Directive, HostListener, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[appAutoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer){

    }
    // @HostListener('(focus)') onFocus() {
    //     this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    // }
    // @HostListener('(blur)') onBlur(){
    //     this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    // }

    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }
}
