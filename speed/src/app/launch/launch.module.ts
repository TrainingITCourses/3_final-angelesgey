import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch/launch.component';
import { LaunchDetailComponent } from './launch/launch-detail/launch-detail.component';
import { MatCardModule, MatIconModule, MatListModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LaunchComponent, LaunchDetailComponent],
  imports: [
    CommonModule,
    LaunchRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
  ]
})
export class LaunchModule { }
