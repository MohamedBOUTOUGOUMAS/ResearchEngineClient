import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ISearchResult } from '../topics/Interfaces';
import { SearchResultService } from "../services/search-result.service";

@Component({
  selector: 'app-research-result',
  templateUrl: './research-result.component.html',
  styleUrls: []
})
export class ResearchResultComponent implements OnInit {

  public searchResults$: Observable<Array<ISearchResult>>;
  public showDetails: string;


  public constructor(private activatedRoute: ActivatedRoute, private searchResultService: SearchResultService) {
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe().subscribe(param => {
      if (param.pattern) {
        this.searchResults$ = this.searchResultService.getSearchResultData(`http://localhost:8080/search?pattern=${param.pattern}`);
      }
    });
  }
}
