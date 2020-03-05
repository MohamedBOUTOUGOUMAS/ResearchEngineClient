import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../topics/Interfaces';
import _ from 'lodash';
import { BookPage } from '../book-page/book-page.component';
@Pipe({
  name: 'colorWord',
})
export class ColorWord implements PipeTransform {

  private isRegEx(pattern: string): boolean {
    return pattern.includes('(') || pattern.includes('+') || pattern.includes('*') || pattern.includes('.');
  }

  transform(book: IBook, pattern: string): IBook {
    let contentDecored = [];
    if (this.isRegEx(pattern)) {
      const regExp = new RegExp(pattern);
      _.map(book.content, (line: string) => {
          const matched = line.match(regExp);
          contentDecored.push(line.replace(regExp, `<span class='bg-danger text-white'>${_.first(matched)}</span>`));
      });
    } else {
      _.map(book.content, (line: string) => {
        contentDecored.push(line.replace(pattern, `<span class='bg-danger text-white'>${pattern}</span>`));
      });
    }
    return {...book, content: contentDecored};
  }
}
