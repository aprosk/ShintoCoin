import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  ledger = this._shintoService.ledger;
  constructor(private _shintoService: ShintoService) { }
  
  ngOnInit() {
  }

}
