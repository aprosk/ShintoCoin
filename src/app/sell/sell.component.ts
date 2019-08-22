import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  shinto = this._shintoService.shinto;
  ledger = this._shintoService.ledger;

  quantity:any;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.quantity='';
  }

  sellCoins() {
    if (this.quantity <= this.shinto.balance && this.quantity > 0) {
      this.ledger.push({action: 'sold', quantity: this.quantity, rate: this.shinto.value});
      this.shinto.balance -= this.quantity;
      this.shinto.value -= this.quantity * 1;
    }
  }

  

}
