import { Directive, Input, Type, ViewContainerRef } from '@angular/core';
import { CompGeneratorService } from '../../../../shared/src/lib/comp-generator.service';
import { AppComponent } from '../../../../../src/app/app.component';
import { BaseCapabilityModel } from '../../../../capbilities/src/lib/models/base-capability.directive';
import { BaseCapability } from '../../../../capbilities/src/lib/models/interfaces/base-capability.interface';
import { EndAtQueryComponent } from './end-at-query.component';

@Directive({
    selector: '[endAtQuery]',
    providers: [CompGeneratorService]
})
export class EndAtQueryDirective extends BaseCapabilityModel {
    public component: Type<BaseCapability> = EndAtQueryComponent;
    public superOnDestroy?: () => void = undefined;

    @Input('endAtQuery') set capability(vcr: ViewContainerRef) {
        this.attach(vcr);
    }

    constructor(compGeneratorService: CompGeneratorService, host: AppComponent) {
        super(host, compGeneratorService);
    }
}
