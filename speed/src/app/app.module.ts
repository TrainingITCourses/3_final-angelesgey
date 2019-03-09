import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from './reducers/launch/launch.effects';
import { StatusEffects } from './reducers/status/status.effects';
import { MissionEffects } from './reducers/mission/mission.effects';
import { AgencyEffects } from './reducers/agency/agency.effects';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DialogsModule } from './dialogs/dialogs.module';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    DialogsModule,    
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LaunchEffects, StatusEffects, MissionEffects, AgencyEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
