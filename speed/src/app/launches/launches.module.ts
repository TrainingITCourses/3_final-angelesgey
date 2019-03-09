import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchesComponent } from './launches/launches.component';
import { LaunchesListComponent } from './launches/launches-list/launches-list.component';
import { MatCardModule, MatIconModule, MatListModule, MatButtonModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LaunchesComponent, LaunchesListComponent],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class LaunchesModule { }
