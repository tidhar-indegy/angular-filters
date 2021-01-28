import { Directive, Input, Type, ViewContainerRef } from '@angular/core';
import { CompGeneratorService } from '../../../../shared/src/lib/comp-generator.service';
import { AppComponent } from '../../../../../src/app/app.component';
import { BaseCapabilityModel } from '../../../../capbilities/src/lib/models/base-capability.directive';
import { BaseCapability } from '../../../../capbilities/src/lib/models/interfaces/base-capability.interface';
import { FreeTextQueryComponent } from './free-text-query.component';

@Directive({
    selector: '[freeTextQuery]',
    providers: [CompGeneratorService]
})
export class FreeTextQueryDirective extends BaseCapabilityModel {
    public component: Type<BaseCapability> = FreeTextQueryComponent;
    public superOnDestroy?: () => void = undefined;

    @Input('freeTextQuery') set capability(vcr: ViewContainerRef) {
        this.attach(vcr);
    }

    constructor(compGeneratorService: CompGeneratorService, host: AppComponent) {
        super(host, compGeneratorService);
    }
}
