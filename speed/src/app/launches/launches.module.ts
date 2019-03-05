import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches/launches.component';
import { LaunchesListComponent } from './launches/launches-list/launches-list.component';
import { MatCardModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [LaunchesComponent, LaunchesListComponent],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ]
})
export class LaunchesModule { }
