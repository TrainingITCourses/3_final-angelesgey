import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/store/models/launch';
import { LoadLaunches } from 'src/app/reducers/launch/launch.actions';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  public launch: Launch;
  public loading: Boolean;
  public launchSelected: String;
  public pageTitle: String;

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
      this.launchSelected = this.activatedRoute.snapshot.params['id'];
      this.launch = launchesState.launches.filter(
        launch => launch.id.toString() === this.launchSelected
      )[0];
      this.pageTitle = (this.launch != undefined ? this.launch.name : "");
      this.loading = launchesState.loading;
    });
  }

}
