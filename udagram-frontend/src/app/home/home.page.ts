import { Component } from '@angular/core';
import { environmentUser } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appName = environmentUser.appName;
}
