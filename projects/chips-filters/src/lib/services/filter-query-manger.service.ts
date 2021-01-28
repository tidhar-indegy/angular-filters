import { Injectable } from '@angular/core';
import { QueryFiltersType } from '../chips-filters/chips-filters.component';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinct } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',

})
export class FilterQueryMangerService {
    private readonly FILTERS_API_URL = '/v1/api/filter';
    private _filterChanges$ = new BehaviorSubject('');

    get filterChanges$(): Observable<string> {
        return this._filterChanges$.asObservable();
    }

    get queryUrl(): URLSearchParams {
        return new URLSearchParams(location.search);
    }

    constructor(private loc: Location, private http: HttpClient) {
        this.loc.onUrlChange((change: string) => this._filterChanges$.next(change));
        // todo: unsubscribe/ move to the container component
        this.filterChanges$
            .pipe(distinct(), debounceTime(800))
            .subscribe((str: string) =>
                this.http.get(this.FILTERS_API_URL + str.split('/')[1]).subscribe());
    }

    clearSearchQuery(): void {
        this.loc.replaceState('/', '');
    }

    updateQueryParams(value: QueryFiltersType): void {
        this.setQueryUrl(value);
    }

    private setQueryUrl(value: QueryFiltersType): void {
        const queryParams = new URLSearchParams();
        // Case new state is empty - remove all filters
        if (Object.keys(value).length === 0) {
            this.loc.replaceState('/', '');
        } else {
            // Adding filters to the url`s query params
            for (let valueKey in value) {
                queryParams.set(valueKey, value[valueKey]);
                this.loc.replaceState('/', queryParams.toString());
            }
        }
    }
}
