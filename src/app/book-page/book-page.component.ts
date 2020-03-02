import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResultService } from '../services/search-result.service';
import { IBook } from '../topics/Interfaces';
import { URI, URI_LOCAL } from '../topics/Interfaces';

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: []
})
export class BookPage implements OnInit {
    public book$: Observable<IBook>;
    public constructor(
      private activatedRoute: ActivatedRoute,
      private searchResultService: SearchResultService,
    ) {}

    public ngOnInit(): void {
        this.activatedRoute.queryParams .pipe().subscribe(param => {
            if (param.fileName) {
                //this.book$ = this.searchResultService.getBook(`${URI_LOCAL}search/book?fileName=${param.fileName}`)
                this.book$ = this.searchResultService.getBook(`${URI}search/book?fileName=${param.fileName}`);
            }
        });
    }
}
