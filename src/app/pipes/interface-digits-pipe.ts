import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interfaceDigits',
})
@Injectable({
  providedIn: 'root',
})
export class InterfaceDigitsPipe implements PipeTransform {
  transform(value: number, digits = 0): number {
    if (value > 0 && value < 1) return 1;
    else if (value < 1) return 0;
    else return +value.toFixed(digits);
  }
}
