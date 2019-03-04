import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  @Input() public launches:  [];
  @Input() public status:  String;

  constructor() { }

  ngOnInit() {
  }

  getCount() {
    console.log("Launches count " + this.launches.length);
    return this.launches.length;
  }

}
