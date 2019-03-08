import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/store/models/launch';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadLaunches } from 'src/app/reducers/launch/launch.actions';
import { ActivatedRoute } from '@angular/router';
import { LoadStatuses } from 'src/app/reducers/status/status.actions';
import { SORT_DESC } from './launches-list/launches-list.component';

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
      this.launches = launchesState.launches
        .filter(launch => launch.status.toString() === this.statusSelected)
        .sort((a, b) => (a.isostart < b.isostart ? 1 : -1));
      this.loading = launchesState.loading;
    });

    this.store.select('status').subscribe(statusState => {
      this.statusSelected = this.activatedRoute.snapshot.params['status'];
      console.log("status this.statusSelected " + this.statusSelected);   
     const statusSel = statusState.statuses.filter(
        status =>          
          status.id.toString() === this.statusSelected
      );
      this.statusName = (statusSel.length > 0) ? statusSel[0].name : "";
      this.pageTitle = "Status: " + this.statusName;        
    });


  }

  onSort = (p) => {
    console.log("Sort " + p);    

    this.launches = this.launches.sort((a, b) => 
      (a.isostart < b.isostart ? ((p === SORT_DESC) ? 1 : -1) : ((p === SORT_DESC) ? -1 : 1)));

  }

}
