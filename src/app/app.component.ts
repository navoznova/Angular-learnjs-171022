import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	readonly title = 'Angular-learnjs-171022';

	onKeydown(event: Event) {
		console.log('onKeydown', event);
	}

	onAppHeaderClick() {
		console.log('onAppHeaderClick');
	}
}
