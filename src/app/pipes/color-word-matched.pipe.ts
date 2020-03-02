import { Pipe, PipeTransform } from '@angular/core';
import { IBook, ISearchResult } from '../topics/Interfaces';
import _ from 'lodash';
@Pipe({
  name: 'colorWord',
})
export class ColorWord implements PipeTransform {
  private getSubString(line: string, from: number, to: number): string{
    let str = '';
    for (let i = from; i < to; i++){
      str += line.charAt(i);
    }
    return str;
  }
  transform(book: IBook, searchResults: ISearchResult[]): any {
    const searchResult = _.first(searchResults);
    searchResult.positions.forEach(position => {
      let line = book.content[position.nbLine-1];
      let word = position.word ? position.word : this.getSubString(line, position.initPos, position.endPos);
      book.content[position.nbLine-1] = line.replace(word, `<span class='bg-danger text-white'>${word}</span>`);
    })
    return book;
  }
}
