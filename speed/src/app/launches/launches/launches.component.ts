import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/store/models/launch';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadLaunches } from 'src/app/reducers/launch/launch.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  public launches: Launch[];
  public loading: Boolean;
  public statusSelected: String;

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
  }

  private observeLaunchesLists() {
    this.store.select('launch').subscribe(launchesState => {
      this.statusSelected = this.activatedRoute.snapshot.params['status'];
      this.launches = launchesState.launches.filter(
        launch => launch.status.toString() === this.statusSelected
      );
      this.loading = launchesState.loading;
    });
  }

}
