import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/store/models/launch';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadLaunches } from 'src/app/reducers/launch/launch.actions';
import { ActivatedRoute } from '@angular/router';
import { LoadStatuses } from 'src/app/reducers/status/status.actions';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  public launches: Launch[];
  public loading: Boolean;
  public statusSelected: String;
  public pageTitle: String;
  public statusName: String;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    // se subscribe a los cambios en las listas
    this.observeLaunchesLists();
    // se cargan los filtros de busqueda
    this.loading = true;
    this.loadData();
    
  }

  private loadData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
  }

  private observeLaunchesLists() {
    this.store.select('launch').subscribe(launchesState => {
      this.statusSelected = this.activatedRoute.snapshot.params['status'];
      this.launches = launchesState.launches.filter(
        launch => launch.status.toString() === this.statusSelected
      );
      this.loading = launchesState.loading;
    });

    this.store.select('status').subscribe(statusState => {
      this.statusSelected = this.activatedRoute.snapshot.params['status'];
      console.log("statusSelected: " + this.statusSelected);
      console.log("statusState.statuses: " + statusState.statuses);
     const statusSel = statusState.statuses.filter(
        status =>          
          status.id.toString() === this.statusSelected
      );
      console.log("statusSel: " + statusSel);
      this.statusName = (statusSel.length > 0) ? statusSel[0].name : "";
      this.pageTitle = "Status: " + this.statusName;      
    });
  }

}
