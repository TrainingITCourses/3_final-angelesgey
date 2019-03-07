import { Component, OnInit } from '@angular/core';
import { Status } from '../../store/models/status';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadStatuses } from '../../reducers/status/status.actions';
import { LoadLaunches } from 'src/app/reducers/launch/launch.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public launchStatus: Status[];
  public loading: Boolean;
  public pageTitle: String;
  
  constructor(private store: Store<State>) { }

  ngOnInit() {
    // se subscribe a los cambios en las listas
    this.observeLaunchStatusesLists();
    // se cargan los filtros de busqueda
    this.loading = true;
    this.loadData();

  }

  private loadData() {
    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadLaunches());
  }

  private observeLaunchStatusesLists() {
    this.store.select('status').subscribe(statusState => {
      this.launchStatus = statusState.statuses;
      this.loading = statusState.loading;
    });

    this.store.select('launch').subscribe(launchState => {
      const numLaunches = launchState.launches.length.toString();
      this.pageTitle = "Number of launches: " + numLaunches;
    });
  }

}
