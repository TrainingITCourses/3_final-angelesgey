import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent implements OnInit {

  @Input() public pageTitle: String;

  constructor() { }

  ngOnInit() {
  }
  
}
