import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISearchResult} from '../topics/Interfaces';
import {SearchResultService} from '../services/search-result.service';
import {URI, URI_LOCAL} from '../topics/Interfaces';

@Component({
    selector: 'app-research-result',
    templateUrl: './research-result.component.html',
    styles: ['.card:hover{ background-color: #e1e1e1; cursor:pointer;}']
})
export class ResearchResultComponent implements OnInit {

    public searchResults: Array<ISearchResult> = [];
    public showDetails: string;
    public pageOfItems: Array<ISearchResult>;
    public pattern: string;
    public requestStatus;

    public constructor(private activatedRoute: ActivatedRoute, private searchResultService: SearchResultService) {
    }

    public onChangePage(pageOfItems: Array<ISearchResult>) {
        this.pageOfItems = this.searchResultService.decorateWithPicture(pageOfItems);
    }

    public initData() {
        this.searchResults = [];
        this.requestStatus = 0;
        this.pageOfItems = [];
    }

    public ngOnInit(): void {
        this.pageOfItems = [];

        this.activatedRoute.queryParams.pipe().subscribe(param => {
            this.initData();
            if (param.pattern && !param.advenced) {
                this.pattern = param.pattern;
                //this.searchResultService.getSearchResults$(`${URI_LOCAL}search?pattern=${param.pattern}&fast=${param.fast}&searchSource=${param.searchSource}&classification=${param.classification}`)
                this.searchResultService.getSearchResults$(`${URI}search?pattern=${param.pattern}&fast=${param.fast}&searchSource=${param.searchSource}&classification=${param.classification}`)
                    .pipe()
                    .subscribe(searchResults => {
                        this.requestStatus = 1;
                        this.searchResults = searchResults;
                    });
            } else if (param.advenced) {
                this.pattern = param.pattern;

                if (!param.metadata) {
                    //this.searchResultService.getAdvencedSearchResults$(`${URI_LOCAL}advencedSearch`,
                    this.searchResultService.getAdvencedSearchResults$(`${URI}advencedSearch`,
                        {
                            regEx: param.pattern,
                            fast: param.fast,
                            searchSource: param.searchSource,
                            classification: param.classification
                        })
                        .pipe()
                        .subscribe(searchResults => {
                            this.requestStatus = 1;
                            this.searchResults = searchResults;
                        });
                } else {
                    //this.searchResultService.getAdvencedPlusSearchResults$(`${URI_LOCAL}advencedSearchPlus`,
                    this.searchResultService.getAdvencedPlusSearchResults$(`${URI}advencedSearchPlus`,
                        {
                            pattern: param.pattern,
                            metadata: param.metadata,
                            classification: param.classification
                        })
                        .pipe()
                        .subscribe(searchResults => {
                            this.requestStatus = 1;
                            this.searchResults = searchResults;
                        });
                }


            }
        });
    }
}
