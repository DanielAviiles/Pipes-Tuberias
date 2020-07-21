import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passw'
})
export class PasswPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): string {
    return (mostrar) ? '*'.repeat(value.length) : value;
  }

}
