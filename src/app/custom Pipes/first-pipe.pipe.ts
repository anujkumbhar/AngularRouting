import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe',
})
export class FirstPipePipe implements PipeTransform {
  transform(value: any) {
    console.log(value);
    //return value.includes('Anuj');
    //return value.length;
    return value.substr(0, 4);
  }
}
