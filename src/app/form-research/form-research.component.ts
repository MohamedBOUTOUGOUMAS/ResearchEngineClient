import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-research',
  templateUrl: './form-research.component.html',
  styleUrls: ['./form-research.component.scss']
})
export class FormResearchComponent implements OnInit{
  @Input() styles: string;
  public pattern: string;

  constructor(private router: Router) {
  }
  public ngOnInit(): void {}

  public navigateTo() {
    this.router.navigate(['/research'], {queryParams: { pattern: this.pattern }});
  }


}
