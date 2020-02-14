import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISearchResult} from '../topics/Interfaces';

@Component({
  selector: 'app-research-result',
  templateUrl: './research-result.component.html',
  styleUrls: []
})
export class ResearchResultComponent implements OnInit {

  public searchResults$: Observable<ISearchResult>;
  public showDetails: string;


  public constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe().subscribe(param => {
      if (param.pattern) {
        this.searchResults$ = this.http.get<ISearchResult>(`http://localhost:8080/search?pattern=${param.pattern}`);
      }
    });
  }
}
