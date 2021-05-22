import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'maxLength',
	pure: true
})
export class MaxLengthPipe implements PipeTransform {

	transform(text: string = '', maxLength: number): string {
		if (!text) {
			return '';
		}
		return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
	}

}
