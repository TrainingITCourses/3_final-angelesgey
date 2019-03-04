import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { StatusListComponent } from './home/status-list/status-list.component';

import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from '../reducers/launch/launch.effects';
import { StatusEffects } from '../reducers/status/status.effects';
import { MissionEffects } from '../reducers/mission/mission.effects';
import { AgencyEffects } from '../reducers/agency/agency.effects';

@NgModule({
  declarations: [HomeComponent, StatusListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LaunchEffects, StatusEffects, MissionEffects, AgencyEffects])
  ]
})
export class HomeModule { }
