import {Component, Input, OnInit} from '@angular/core';
import {SearchResultService} from '../services/search-result.service';
import {ISearchResult} from '../topics/Interfaces';
import {ActivatedRoute} from '@angular/router';
import { URI, URI_LOCAL } from '../topics/Interfaces';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: []
})
export class SuggestionsComponent implements OnInit {
  public suggestions: Array<ISearchResult> = [];
  @Input() pattern: string;
  @Input() fileName: string;
  constructor(private activatedRoute: ActivatedRoute, private searchResultService: SearchResultService) { }

  ngOnInit(): void {
    //this.searchResultService.getSuggestions$(`${URI}suggestions?${this.fileName}`)
    this.searchResultService.getSuggestions$(`${URI_LOCAL}suggestions?filename=${this.fileName}`)
        .pipe()
        .subscribe(suggestions => {
          this.suggestions = suggestions;
        });
  }

}
