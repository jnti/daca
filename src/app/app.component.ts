import { Component, OnInit } from '@angular/core';
import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DACA';
  status = 'DOWN';

  constructor(private statusServer: StatusService) {}

  ngOnInit() {
      this.statusServer
          .getStatus()
          .then((result: any) => {
            this.status = result.status;
          })
  }
}
