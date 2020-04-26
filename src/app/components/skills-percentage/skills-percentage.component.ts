import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'skills-percentage',
	templateUrl: './skills-percentage.component.html',
	styleUrls: ['./skills-percentage.component.css']
})
export class SkillsPercentageComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() percentage: number;

	@ViewChild('skills', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {
	}

}
