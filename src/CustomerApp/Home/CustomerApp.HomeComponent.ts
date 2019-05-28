import { Component } from '@angular/core';
import {BaseLogger} from '../../utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.HomeView.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent {
  logger: BaseLogger = null;
  constructor(logger: BaseLogger) {
    this.logger = logger;
    this.logger.log();
  }
}
