import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [StatusbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    StatusbarComponent
  ]
})
export class SharedModule { }
