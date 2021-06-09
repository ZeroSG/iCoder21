import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: 'Y'|'N'): unknown {
    if(value==='Y'){
      return 'ใช้งาน'
    }else if(value==='N'){
      return 'ปิดการใช้งาน'
    }
    return null;
  }

}
