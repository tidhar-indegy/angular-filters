import { ComponentFactoryResolver, EventEmitter, Injectable, Type, ViewContainerRef } from '@angular/core';
import { BaseCapability } from '../../../capbilities/src/lib/models/interfaces/base-capability.interface';

@Injectable()
export class CompGeneratorService {
    constructor(private compFactory: ComponentFactoryResolver) {
    }

    createComponent(comp: Type<BaseCapability>, viewComponentRef: ViewContainerRef, onDone: EventEmitter<any>, onValueChange?: EventEmitter<any>) {
        const generated = this.compFactory.resolveComponentFactory(comp);
        const result = viewComponentRef.createComponent(generated);
        result.instance.onDone = onDone;
        result.instance.onValueChange = onValueChange;
    }
}
