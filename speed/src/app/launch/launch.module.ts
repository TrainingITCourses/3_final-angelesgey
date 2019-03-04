import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch/launch.component';
import { LaunchesListComponent } from './launch/launches-list/launches-list.component';
import { MatCardModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [LaunchComponent, LaunchesListComponent],
  imports: [
    CommonModule,
    LaunchRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ]
})
export class LaunchModule { }
