import { Pipe, PipeTransform } from '@angular/core';
import { IShow } from './../interfaces/show';

@Pipe({
  name: 'showsFilter'
})
// export class ShowsFilterPipe implements PipeTransform {
//   transform(shows: IShow[], search: string = ''): IShow[] {
//     if (!search.trim()) {
//       return shows;
//     }
// //     return shows.filter(todo => {
// //       return shows.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
// //     });
// //   }
// }