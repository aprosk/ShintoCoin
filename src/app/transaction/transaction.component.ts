import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  ledger = this._shintoService.ledger;
  constructor(
    private _shintoService: ShintoService,
    private _route: ActivatedRoute,
    ) { }

  transaction: any;
  id: any;

  ngOnInit() {
    let observable = this._route.params;
    observable.subscribe(
      data => (
        this.id = data.id,
        this.transaction = this.ledger[this.id],
        console.log(data.id)
        
      )
    )
  }

}
