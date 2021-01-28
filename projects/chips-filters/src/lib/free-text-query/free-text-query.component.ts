import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { BaseCapability } from '../../../../capbilities/src/lib/models/interfaces/base-capability.interface';
import { FilterQueryMangerService } from '../services/filter-query-manger.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'lib-free-text-query',
    templateUrl: './free-text-query.component.html',
    styleUrls: ['./free-text-query.component.css']
})
export class FreeTextQueryComponent implements BaseCapability<{ freeText: string }>, OnInit, OnDestroy {
    public capabilityName: string = 'searchTerm';
    public onDone: EventEmitter<string>;
    public onValueChange: EventEmitter<any>;
    public value: string;
    private ngUnsubscribe = new Subject();

    constructor(private filterQueryManger: FilterQueryMangerService) {
    }

    ngOnInit(): void {
        this.filterQueryManger
            .filterChanges$
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => this.listenToQueryUrl());
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    valueChange(value: string) {
        this.onValueChange.emit({
            key: this.capabilityName,
            value,
            unique: true
        });
        this.value = value;
    }

    private listenToQueryUrl() {
        let all = this.filterQueryManger.queryUrl.getAll(this.capabilityName);
        if (all?.length) {
            this.valueChange(all?.join(','));
        } else {
            this.value = '';
        }
    }
}
