import { NgModule } from '@angular/core';
import { ChipsFiltersComponent } from './chips-filters/chips-filters.component';
import { FreeTextQueryComponent } from './free-text-query/free-text-query.component';
import { FreeTextQueryDirective } from './free-text-query/free-text-query.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { StartAtQueryDirective } from './start-at-query/start-at-query.directive';
import { StartAtQueryComponent } from './start-at-query/start-at-query.component';
import { CapabilitiesModule } from '../../../capbilities/src/lib/capabilities.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FilterChipsFormComponent } from './chips-filters/filter-chips-form/filter-chips-form.component';
import { EndAtQueryDirective } from './end-at-query/end-at-query.directive';
import { EndAtQueryComponent } from './end-at-query/end-at-query.component';

@NgModule({
    providers: [
        {provide: APP_BASE_HREF, useValue: ''},
        Location,
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    imports: [
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        CapabilitiesModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        HttpClientModule,
    ],
    declarations: [
        EndAtQueryDirective,
        EndAtQueryComponent,
        ChipsFiltersComponent,
        FreeTextQueryComponent,
        FreeTextQueryDirective,
        StartAtQueryDirective,
        StartAtQueryComponent,
        FilterChipsFormComponent
    ],
    exports: [
        MatInputModule,
        MatIconModule,
        CapabilitiesModule,
        ChipsFiltersComponent,
        FreeTextQueryComponent,
        FreeTextQueryDirective,
        StartAtQueryDirective,
        StartAtQueryComponent,
        EndAtQueryDirective,
        EndAtQueryComponent,
        HttpClientModule,
        MatChipsModule
    ]
})
export class ChipsFiltersModule {
}
