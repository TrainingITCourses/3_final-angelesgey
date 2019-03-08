import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

export const SORT_ASC: string = "ASC";
export const SORT_DESC: string = "DESC";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  @Input() public launches:  [];
  @Input() public status:  String;
  @Input() public relativePath:  String;

  @Output() public sort = new EventEmitter();

  public isAscendent: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getCount() {
    console.log("Launches count " + this.launches.length);
    return this.launches.length;
  }

  public sortAsc() {
    this.isAscendent = true;
    this.sort.emit(SORT_ASC);
  }
  public sortDesc() {
    this.isAscendent = false;
    this.sort.emit(SORT_DESC);
  }

}
