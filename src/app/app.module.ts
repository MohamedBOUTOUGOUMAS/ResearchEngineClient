import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormResearchComponent } from './form-research/form-research.component';
import { ResearchResultComponent } from './research-result/research-result.component';
import {ResearchPage} from "./research-page/research-page.component";

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
      AppComponent,
      FormResearchComponent,
      ResearchResultComponent,
      ResearchPage,
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
        {path: '', component: ResearchPage},
        {path: 'research', component: ResearchResultComponent}
      ]),
      HttpClientModule,
      FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
