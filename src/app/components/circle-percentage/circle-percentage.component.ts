import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'circle-percentage',
	templateUrl: './circle-percentage.component.html',
	styleUrls: ['./circle-percentage.component.css']
})
export class CirclePercentageComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() percentage: number;
	@Input() color: string;
	@Input() dark: boolean;

	@ViewChild('circ', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {
	}

}
