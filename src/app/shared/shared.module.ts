import { DropdownDirectiveDirective } from './../directives/dropdown-directive.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        DropdownDirectiveDirective
    ],
    exports: [
        CommonModule,
        DropdownDirectiveDirective
    ]
})
export class SharedModule {}