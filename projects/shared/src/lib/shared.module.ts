import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { CompGeneratorService } from './comp-generator.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SharedComponent],
    imports: [BrowserModule, CommonModule],
    providers: [CompGeneratorService],
    exports: [SharedComponent]
})
export class SharedModule {
}
