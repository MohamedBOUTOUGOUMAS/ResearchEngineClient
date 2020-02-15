import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormResearchComponent } from './form-research/form-research.component';
import { ResearchResultComponent } from './research-result/research-result.component';
import { ResearchPage } from "./research-page/research-page.component";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookPage } from "./book-page/book-page.component";
import { SearchResultService } from "./services/search-result.service";
import { ColorWord } from "./Pipes/color-word-matched.pipe";
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
      AppComponent,
      FormResearchComponent,
      ResearchResultComponent,
      ResearchPage,
      BookPage,
      ColorWord,
      JwPaginationComponent
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
  ],
  providers: [SearchResultService, ColorWord],
  bootstrap: [AppComponent]
})
export class AppModule { }
