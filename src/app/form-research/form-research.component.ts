import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-research',
  templateUrl: './form-research.component.html',
  styleUrls: []
})
export class FormResearchComponent implements OnInit{
  public pattern: string;

  constructor(private router: Router) {
  }
  public ngOnInit(): void {
  }

  public navigateTo() {
    this.router.navigate(['/research'], {queryParams: { pattern: this.pattern }});
  }


}
