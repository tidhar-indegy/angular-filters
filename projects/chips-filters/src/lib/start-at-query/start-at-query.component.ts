import { Component, EventEmitter } from '@angular/core';
import { BaseCapability } from '../../../../capbilities/src/lib/models/interfaces/base-capability.interface';
import { FilterQueryMangerService } from '../services/filter-query-manger.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    templateUrl: './start-at-query.component.html',
    styleUrls: ['./start-at-query.component.css']
})
export class StartAtQueryComponent implements BaseCapability<{ startAt: string, endAt: string }> {
    public onDone: EventEmitter<string>;
    public onValueChange: EventEmitter<any>;
    public capabilityName = 'startAt';
    public value: string;
    private ngUnsubscribe = new Subject();

    constructor(private filterQueryManger: FilterQueryMangerService) {
    }

    // todo: base class
    public ngOnInit(): void {
        let all = this.filterQueryManger.queryUrl.getAll(this.capabilityName);
        Array.isArray(all) && all.length > 0 ? this.valueChange(all.join(',')) : this.value = '';
        this.filterQueryManger
            .filterChanges$
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => this.listenToQueryUrl());
    }

    public valueChange(value: string): void {
        this.onValueChange.emit({key: this.capabilityName, value: value});
        this.value = value;
    }

    private listenToQueryUrl() {
        let all = this.filterQueryManger.queryUrl.get(this.capabilityName);
        if (Array.isArray(all) && all.length > 0) {
            this.valueChange(all.join(','));
        } else {
            this.value = all;
        }
    }

}
