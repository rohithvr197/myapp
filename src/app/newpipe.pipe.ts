import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newpipe'
})
export class NewpipePipe implements PipeTransform {

  transform(value: String,name:String): unknown {
    return 'Firstname'+name;
  }

}
