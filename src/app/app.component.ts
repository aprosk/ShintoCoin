import { Component } from '@angular/core';

import {ShintoService} from './shinto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  shinto = this._shintoService.shinto;

  constructor(private _shintoService: ShintoService) {

  }
}
