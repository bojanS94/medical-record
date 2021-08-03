import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(patients: Array<any>, search: string): any {
    if (patients && search) {
      patients.filter(obj => obj.patients.name.indexOf(search) > -1);
    }

    return patients;
  }

}
