import { Pipe, PipeTransform } from '@angular/core';
import {Geo} from '../classes/geo';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Geo>, field: string): Array<Geo> {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: Geo, b: Geo) => {
      if (a.hits > b.hits) {
        return -1;
      } else if (a.hits < b.hits) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
