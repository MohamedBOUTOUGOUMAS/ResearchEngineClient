import { Pipe, PipeTransform } from '@angular/core';
import { IBook, ISearchResult } from "../topics/Interfaces";
import _ from "lodash";
@Pipe({
  name: 'colorWord',
})
export class ColorWord implements PipeTransform {
  transform(book: IBook, searchResults: ISearchResult[]): any {
    const searchResult = _.first(searchResults);
    searchResult.positions.forEach(position => {
      let line = book.content[position.nbLine-1];
      const word = line.substr(position.initPos, position.endPos);
      book.content[position.nbLine-1] = line.replace(word, `<span class='bg-danger text-white'>${word}</span>`);
    })
    console.log('book', book);
    return book;
  }
}
