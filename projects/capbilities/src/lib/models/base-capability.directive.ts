import { EventEmitter, Output, Type, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CompGeneratorService } from '../../../../shared/src/lib/comp-generator.service';
import { BaseCapability } from './interfaces/base-capability.interface';

export abstract class BaseCapabilityModel implements BaseCapability {
    capabilityName: string = 'BaseCapability';
    @Output() onDone = new EventEmitter<any>();
    @Output() onValueChange = new EventEmitter<any>();

    attach(attachTo: ViewContainerRef) {
        this.hostContainer?.clear?.();
        this.setHostContainer(attachTo);
        this.createCapabilityComponent(attachTo);
    }

    private capabilityAction$ = new Subject();
    protected abstract component: Type<BaseCapability>;
    protected ngUnsubscribe = new Subject();
    public abstract superOnDestroy?: () => void | undefined;

    get capabilityAction(): Observable<any> {
        return this.capabilityAction$.asObservable();
    }

    protected constructor(public hostContainer: any, protected compGenerator: CompGeneratorService) {
    }

    private createCapabilityComponent(attachTo: ViewContainerRef): void {
        if (attachTo) {
            this.compGenerator.createComponent(
                this.component,
                attachTo,
                this.onDone,
                this.onValueChange
            );
        }
    }

    private setHostContainer(attachTo: ViewContainerRef) {
        this.hostContainer = attachTo;
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.superOnDestroy?.();
    }


}

