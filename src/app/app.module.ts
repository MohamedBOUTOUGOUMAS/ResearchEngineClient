import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    MatAutocompleteModule, MatCardModule,
    MatInputModule, MatRadioModule
} from '@angular/material';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {FormResearchComponent} from './form-research/form-research.component';
import {ResearchResultComponent} from './research-result/research-result.component';
import {ResearchPage} from './research-page/research-page.component';

import {HttpClientModule} from '@angular/common/http';
import {BookPage} from './book-page/book-page.component';
import {SearchResultService} from './services/search-result.service';
import {ColorWord} from './pipes/color-word-matched.pipe';
import {SearchFilter} from './pipes/search-filtering.pipe';
import {JwPaginationComponent} from './jw-pagination-custom/jw-pagination.component';

@NgModule({
    declarations: [
        AppComponent,
        FormResearchComponent,
        ResearchResultComponent,
        ResearchPage,
        BookPage,
        ColorWord,
        JwPaginationComponent,
        SearchFilter,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', component: ResearchPage},
            {path: 'search', component: ResearchResultComponent},
            {path: 'search/book', component: BookPage}
        ]),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        MatAutocompleteModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatRadioModule,
        MatCardModule,
    ],
    providers: [SearchResultService, ColorWord, SearchFilter,
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
        NgbPopoverConfig
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
