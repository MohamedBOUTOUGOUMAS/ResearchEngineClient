import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-research',
  templateUrl: './form-research.component.html',
  styleUrls: ['./form-research.component.scss']
})
export class FormResearchComponent {
  @Input() styles: string;
  public pattern: string;
}
