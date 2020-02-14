import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: []
})
export class BookPage implements OnInit{
    public book$: Observable<Array<string>>;

    public constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.pipe().subscribe(param => {
            if (param.fileName) {
                console.log('param.fileName', param.fileName);
                this.book$ = this.http.get<Array<string>>(`http://localhost:8080/search/book?fileName=${param.fileName}`);
            }
        });
    }
}
