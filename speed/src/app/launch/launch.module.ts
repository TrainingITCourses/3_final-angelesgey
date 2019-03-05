import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch/launch.component';
import { LaunchDetailComponent } from './launch/launch-detail/launch-detail.component';
import { MatCardModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [LaunchComponent, LaunchDetailComponent],
  imports: [
    CommonModule,
    LaunchRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ]
})
export class LaunchModule { }
