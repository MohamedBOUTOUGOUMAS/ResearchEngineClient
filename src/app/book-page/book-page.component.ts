import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public book: IBook = {fileName: '', author: '', title: '', releaseDate: '', content: []};
    public progress = 10;
    private interval;
    public constructor(
      private activatedRoute: ActivatedRoute,
      private searchResultService: SearchResultService,
      private colorPipe: ColorWord
    ) {}

    public ngOnInit(): void {
        this.interval = setInterval(() => {
            if (this.progress < 90) { this.progress += 10; } else { clearInterval(this.interval); }
        }, 100);

        this.activatedRoute.queryParams .pipe().subscribe(param => {
            if (param.fileName && param.pattern) {
                //this.searchResultService.getBook(`${URI_LOCAL}search/book?fileName=${param.fileName}`)
                //.pipe().subscribe(book => {this.book = this.colorPipe.transform(book, param.pattern); this.progress = 100; });
                this.searchResultService.getBook(`${URI}search/book?fileName=${param.fileName}`)
                .pipe().subscribe(book => {this.book = this.colorPipe.transform(book, param.pattern); this.progress = 100; });
            }
        });
    }
}
