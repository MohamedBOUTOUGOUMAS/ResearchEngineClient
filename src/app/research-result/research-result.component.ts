import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchResult } from '../topics/Interfaces';
import { SearchResultService } from "../services/search-result.service";

@Component({
  selector: 'app-research-result',
  templateUrl: './research-result.component.html',
  styles:['']
})
export class ResearchResultComponent implements OnInit {

  public searchResults: Array<ISearchResult> = [];
  public showDetails: string;
  public pageOfItems: Array<ISearchResult>;
  public pattern: string;
  public requestStatus;
  public constructor(private activatedRoute: ActivatedRoute, private searchResultService: SearchResultService) {
  }

  public onChangePage(pageOfItems: Array<ISearchResult>) {
    this.pageOfItems = pageOfItems;
  }

  public initData(){
    this.searchResults = [];
    this.requestStatus = 0;
    this.pageOfItems = [];
  }

  public ngOnInit(): void {
    this.pageOfItems = [];

    this.activatedRoute.queryParams.pipe().subscribe(param => {
      this.initData();
      if (param.pattern && !param.advenced) {
        this.pattern = param.pattern;
        this.searchResultService.getSearchResults$(`http://localhost:8080/search?pattern=${param.pattern}`)
          .pipe()
          .subscribe(searchResults => {
            this.requestStatus = 1;
            this.searchResults = searchResults;
          });
      } else if(param.advenced) {
        this.pattern = param.pattern;
        this.searchResultService.getAdvencedSearchResults$(`http://localhost:8080/advencedSearch`, {regEx: param.pattern})
          .pipe()
          .subscribe(searchResults => {
            this.requestStatus = 1;
            this.searchResults = searchResults;
          });
      }
    });
  }
}
