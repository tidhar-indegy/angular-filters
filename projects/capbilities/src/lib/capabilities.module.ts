import { NgModule } from '@angular/core';
import { CompGeneratorService } from '../../../shared/src/lib/comp-generator.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [BrowserModule, CommonModule],
    providers: [CompGeneratorService],
})
export class CapabilitiesModule {
}
