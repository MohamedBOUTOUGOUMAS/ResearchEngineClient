import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest, Observable } from "rxjs";
import { SearchResultService } from "../services/search-result.service";
import { IBook, ISearchResult } from "../topics/Interfaces";
import { ColorWord } from "../Pipes/color-word-matched.pipe";


@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: []
})
export class BookPage implements OnInit{
    public book$: Observable<IBook>;
    public searchResults$: Observable<ISearchResult[]>;
    public book: IBook;
    public constructor(
      private activatedRoute: ActivatedRoute,
      private searchResultService: SearchResultService,
      private colorWord: ColorWord
    ) {}

    public ngOnInit(): void {
        this.activatedRoute.queryParams .pipe().subscribe(param => {
            if (param.fileName) {
                this.book$ = this.searchResultService.getBook(`http://localhost:8080/search/book?fileName=${param.fileName}`);
                this.searchResults$ = this.searchResultService.getSearchResultBook(param.fileName);
                combineLatest(this.book$, this.searchResults$).subscribe(([book, searchResults]) => {
                    this.book = this.colorWord.transform(book, searchResults);
                });
            }
        });
    }
}
