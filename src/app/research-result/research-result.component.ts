import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../topics/IBook';

@Component({
  selector: 'app-research-result',
  templateUrl: './research-result.component.html',
  styleUrls: []
})
export class ResearchResultComponent implements OnInit {

  public books$: Observable<IBook>;
  public showDetails: string;


  public constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe ().subscribe(param => {
      if (param.pattern) {
        this.books$ = this.http.get<IBook>(`http://localhost:8080/research?pattern=${param.pattern}`);
      }
    });
  }
}
