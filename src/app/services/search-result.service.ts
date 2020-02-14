import { Injectable } from '@angular/core';
import { IBook, ISearchResult } from "../topics/Interfaces";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class SearchResultService {

  public searchResults$: Observable<Array<ISearchResult>>;
  constructor(private http: HttpClient) {}

  public getSearchResultData(url?: string): Observable<Array<ISearchResult>>{
    if (this.searchResults$ && !url) return this.searchResults$;
    this.searchResults$ = this.http.get<Array<ISearchResult>>(url);
    return this.searchResults$;
  }

  public getBook(url: string): Observable<IBook> {
    return this.http.get<IBook>(url);
  }

  public getSearchResultBook(fileName: string): Observable<ISearchResult[]>{
    console.log('fileName', fileName);
    return this.searchResults$.pipe(
        map((searchResults: ISearchResult[]) =>
          searchResults.filter((searchResult: ISearchResult) => searchResult.book.fileName === fileName))
    );
  }

}
