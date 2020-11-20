import { Component, OnInit } from '@angular/core';
import { environmentUser } from '../../environments/environment';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  public appName = environmentUser.appName;

  constructor() { }

  ngOnInit() {}

}
