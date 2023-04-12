import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cardPhone'
})
export class CardPhonePipe implements PipeTransform {

  transform(phone: string): string {
    phone = phone.split(" x")[0].split("-").join(" ");

    const closingParenIndex = phone.indexOf(")");
    if (closingParenIndex !== -1) {
      phone = phone.slice(0, closingParenIndex + 1) + " " + phone.slice(closingParenIndex + 1);
    }
    return phone;
  }
}
