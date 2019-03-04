import { Component, OnInit } from '@angular/core';
import { Status } from '../../store/models/status';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadStatuses } from '../../reducers/status/status.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public launchStatus: Status[];
  public loading: Boolean;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // se subscribe a los cambios en las listas
    this.observeLaunchesLists();
    // se cargan los filtros de busqueda
    this.loading = true;
    this.loadData();       
  }

  private loadData() {
    this.store.dispatch(new LoadStatuses());
  }

  private observeLaunchesLists() {
    this.store.select('status').subscribe(statusState => {
      this.launchStatus = statusState.statuses;
      this.loading = statusState.loading;
    });
  }

}
