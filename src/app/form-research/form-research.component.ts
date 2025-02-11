import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { URI, URI_LOCAL } from '../topics/Interfaces';

@Component({
  selector: 'app-form-research',
  templateUrl: './form-research.component.html',
  styleUrls: ['./form-research.component.scss']
})
export class FormResearchComponent implements OnInit {
  @Input() styles: string;
  public pattern: string;
  public advencedSearch = false;
  public advencedInput: string;
  public advencedInputMetadata: string;
  public fast = 'true';
  public options$: Observable<string[]>;
  public myControl = new FormControl();
  public searchSource = 'db';
  public classification = 'nbOccurs';
  public advancedMode = '';

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe().subscribe(param => {
      if (param.fast) {this.fast = param.fast === 'true' ? 'true' : 'false'; }
    });
    //this.options$ = this.http.get<string[]>(`${URI_LOCAL}autoComplete`);
    this.options$ = this.http.get<string[]>(`${URI}autoComplete`);
  }
}
