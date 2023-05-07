import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contentformat'
})
export class ContentFormatPipe implements PipeTransform {
    transform(value: string, length: number = 100, ellipsis: string = '...'): string {
        if (value.length <= length) {
            return value;
        }
        return value.slice(0, length - ellipsis.length) + ellipsis;
    }
}
