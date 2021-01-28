import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DoneParams, QueryFiltersType } from '../chips-filters.component';
import { KeyValue } from '@angular/common';
import { FilterQueryMangerService } from '../../services/filter-query-manger.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'lib-filter-chips-form',
    templateUrl: './filter-chips-form.component.html',
    styleUrls: ['./filter-chips-form.component.css']
})
export class FilterChipsFormComponent implements OnInit {
    public separatorKeysCodes: number[] = [ENTER, COMMA];
    public selectable = false;
    public removable = true;
    public filterCtl = new FormControl([]);
    private _displayList: QueryFiltersType;
    private ngUnsubscribe = new Subject();

    @Input() set filters(value: QueryFiltersType) {
        this._displayList = value;
        this.filterCtl.setValue(value);
    }

    @Output() onRemove = new EventEmitter<KeyValue<string, string[] | string>>();
    @Output() onAdd = new EventEmitter<DoneParams>();

    get displayList(): QueryFiltersType {
        return this._displayList;
    }

    constructor(private filterQueryManger: FilterQueryMangerService) {
    }

    isArray(filter: QueryFiltersType) {
        return typeof filter.value !== 'string';
    }

    trackBy(event: any, index: number) {
        return event.key + index;
    }

    ngOnInit(): void {
        this.filterCtl.valueChanges
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((value: QueryFiltersType) => {
            this.filterQueryManger.updateQueryParams(value);
        });
    }
}
