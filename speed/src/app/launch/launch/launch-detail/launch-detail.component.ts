import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from 'src/app/store/models/launch';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit {

  @Input() public launch: Launch;

  constructor() { }

  ngOnInit() {
  }

}
