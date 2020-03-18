import {Component, Input} from '@angular/core';
import {ISearchResult} from '../topics/Interfaces';

@Component({
  selector: 'app-suggestions-carousel',
  templateUrl: './suggestions-carousel.component.html',
  styleUrls: []
})
export class SuggestionsCarouselComponent {
  @Input() suggestions: Array<ISearchResult>;
  @Input() pattern: string;

  constructor() { }

  getTitle(index: number): string {
    const result = this.suggestions[index].book.title;
    if (result.length > 48) {
      return result.substring(0, 48) + '...';
    } else {
      return result;
    }
  }

}
