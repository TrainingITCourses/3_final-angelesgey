import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { StatusListComponent } from './home/status-list/status-list.component';

import {
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, StatusListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,    
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
