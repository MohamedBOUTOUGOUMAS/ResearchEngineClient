import { Injectable } from '@angular/core';
import { IBook, ISearchResult } from '../topics/Interfaces';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class SearchResultService {
  public searchResults$: Observable<Array<ISearchResult>>;
  constructor(private http: HttpClient) {}

  public getSearchResults$(url?: string): Observable<Array<ISearchResult>> {
    if (this.searchResults$ && !url) return this.searchResults$;
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    this.searchResults$ = this.http.get<Array<ISearchResult>>(url, {headers});
    return this.searchResults$;
  }

  public getBook(url: string): Observable<IBook> {
    return this.http.get<IBook>(url);
  }

  public getSearchResultBook$(fileName: string): Observable<ISearchResult[]>{
    return this.searchResults$.pipe(
        map((searchResults: ISearchResult[]) =>
          searchResults.filter((searchResult: ISearchResult) => searchResult.book.fileName === fileName))
    );
  }

  public getAdvencedSearchResults$(url: string, payload: any): Observable<Array<ISearchResult>> {
    if (this.searchResults$ && !url) return this.searchResults$;
    this.searchResults$ = this.http.post<Array<ISearchResult>>(url, payload);
    return this.searchResults$;
  }

}
