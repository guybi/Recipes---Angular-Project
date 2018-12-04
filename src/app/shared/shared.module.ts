import { OnHoverItemDirective } from './../directives/on-hover-item.directive';
import { DropdownDirectiveDirective } from './../directives/dropdown-directive.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        DropdownDirectiveDirective,
        OnHoverItemDirective
    ],
    exports: [
        CommonModule,
        DropdownDirectiveDirective,
        OnHoverItemDirective
    ]
})
export class SharedModule {}