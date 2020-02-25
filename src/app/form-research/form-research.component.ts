import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-research',
  templateUrl: './form-research.component.html',
  styleUrls: ['./form-research.component.scss']
})
export class FormResearchComponent implements OnInit{
  @Input() styles: string;
  public pattern: string;
  public advencedSearch = false;
  public advencedInput: string;
  public fast = false;

  constructor(private activatedRoute : ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe().subscribe(param => {
      if (param.fast) this.fast = param.fast === "true";
      console.log('this.fast', this.fast);
    });
  }

}
