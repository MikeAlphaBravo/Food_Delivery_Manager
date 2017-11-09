import {Pipe, PipeTransform} from '@angular/core';
import {Client} from './client.model';

@Pipe({
  name: "optness",
  pure: false
})

export class OptnessPipe implements PipeTransform {
  transform(input: [], optStatus) {
    var output: [] = [];
      for(var i = 0; i < input.length; ++i){
        if(input[i].opt === true){
          output.push(input[i]);
        }
      }
    return output;
  }
}
