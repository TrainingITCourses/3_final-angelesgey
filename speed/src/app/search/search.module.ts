import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchFilterComponent } from './search/search-filter/search-filter.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatToolbarModule, MatSelectModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultComponent,
    SearchFilterComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class SearchModule { }
