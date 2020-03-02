import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})

export class SearchFilter implements PipeTransform {
    transform(tab: string[], filter: string): string[] {
        if (!tab || !filter) {
            return tab;
        }
        return tab.filter(v => {
            const s = v.toUpperCase();
            return s.includes(filter.toUpperCase());
        });
      }
}
