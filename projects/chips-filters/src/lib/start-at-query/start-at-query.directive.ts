import { Directive, Input, Type, ViewContainerRef } from '@angular/core';
import { CompGeneratorService } from '../../../../shared/src/lib/comp-generator.service';
import { AppComponent } from '../../../../../src/app/app.component';
import { BaseCapabilityModel } from '../../../../capbilities/src/lib/models/base-capability.directive';
import { BaseCapability } from '../../../../capbilities/src/lib/models/interfaces/base-capability.interface';
import { StartAtQueryComponent } from './start-at-query.component';

@Directive({
    selector: '[startAtQuery]',
    providers: [CompGeneratorService]
})
export class StartAtQueryDirective extends BaseCapabilityModel {
    public component: Type<BaseCapability> = StartAtQueryComponent;
    public superOnDestroy?: () => void = undefined;

    @Input('startAtQuery') set capability(vcr: ViewContainerRef) {
        this.attach(vcr);
    }

    constructor(compGeneratorService: CompGeneratorService, host: AppComponent) {
        super(host, compGeneratorService);
    }
}
