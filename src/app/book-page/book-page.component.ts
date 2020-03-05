import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResultService } from '../services/search-result.service';
import { IBook } from '../topics/Interfaces';
import { URI, URI_LOCAL } from '../topics/Interfaces';
import { ColorWord } from '../pipes/color-word-matched.pipe';

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: []
})
export class BookPage implements OnInit {
    public book: IBook;
    public constructor(
      private activatedRoute: ActivatedRoute,
      private searchResultService: SearchResultService,
      private colorPipe: ColorWord
    ) {}

    public ngOnInit(): void {
        this.activatedRoute.queryParams .pipe().subscribe(param => {
            if (param.fileName && param.pattern) {
                //this.searchResultService.getBook(`${URI_LOCAL}search/book?fileName=${param.fileName}`)
                //.pipe().subscribe(book => this.book = this.colorPipe.transform(book, param.pattern));
                this.searchResultService.getBook(`${URI}search/book?fileName=${param.fileName}`)
                .pipe().subscribe(book => this.book = this.colorPipe.transform(book, param.pattern));
            }
        });
    }
}
