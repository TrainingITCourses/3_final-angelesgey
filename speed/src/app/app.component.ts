import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'speed';

  constructor(
    private dialog: MatDialog,
    private swUpdate: SwUpdate
  ) {
    this.observeVersions();
  }

  private observeVersions() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '250px',
          data: {
            message: 'There is a new version, click ok to install', 
            title: 'New version available'
          }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) window.location.reload();
          });
      });
    } else {
      console.log('Service worker not enabled');
    }
  }
}
