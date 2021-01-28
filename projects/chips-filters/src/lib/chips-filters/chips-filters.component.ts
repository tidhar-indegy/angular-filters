import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FilterQueryMangerService } from '../services/filter-query-manger.service';


export interface DoneParams {
    unique?: boolean,
    key: string,
    value: string
}

export type QueryFiltersType = { [k: string]: DoneParams } | DoneParams;

@Component({
    selector: 'lib-chips-filters',
    styleUrls: ['./chips-filters.css'],
    templateUrl: './chips-filters.component.html'
})
export class ChipsFiltersComponent {
    get filters(): any {
        return this._filters;
    }

    set filters(value: any) {
        this._filters = value;
    }

    @ViewChild('filtersVCR', {read: ViewContainerRef}) filtersContainer;
    private _filters: QueryFiltersType = null;

    constructor(private filterQueryManger: FilterQueryMangerService) {
    }

    done(evt: DoneParams): void {
        this.add(evt);
    }

    add(event: DoneParams) {
        let currentFilter = this._filters && (event.key in this._filters) ? this.filters[event.key] : [];
        this.filters = event.unique ?
            {...this._filters, [event.key]: event.value} :
            {...this._filters, [event.key]: [...currentFilter, event.value]};
    }

    remove(value: KeyValue<string, string[] | string>) {
        delete this.filters[value.key];
        this.filterQueryManger.updateQueryParams(this.filters);
    }
}
