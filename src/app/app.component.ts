import { Component } from '@angular/core';
import { CompGeneratorService } from '../../projects/shared/src/lib/comp-generator.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CompGeneratorService]
})
export class AppComponent {
}
