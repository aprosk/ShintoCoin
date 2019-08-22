import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShintoService {

  shinto = {
    value:25,
    balance:2,
  }

  ledger = [
    {action: 'mined', quantity: 1, rate: 22},
    {action: 'mined', quantity: 1, rate: 23},
    {action: 'mined', quantity: 1, rate: 24},
  ]

  constructor() { }

  getData() {
    return this.shinto;
  }

  setData() {
    return this.shinto;
  }

  changeCoins(n) {
    this.shinto.balance += n;
  }

  changeValue(n) {
    this.shinto.value += n;
  }

}
