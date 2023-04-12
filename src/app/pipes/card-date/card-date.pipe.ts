import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cardDate'
})
export class CardDatePipe implements PipeTransform {

  transform(date: string): string {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  }
}
