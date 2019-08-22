import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  shinto = this._shintoService.shinto;
  ledger = this._shintoService.ledger;

  quantity:any;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.quantity='';
  }

  buyCoins() {
    this.ledger.push({action: 'bought', quantity: this.quantity, rate: this.shinto.value});
    this.shinto.balance += this.quantity;
    this.shinto.value += this.quantity * 1;
  }

  

}
