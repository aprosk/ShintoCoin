import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  shinto = this._shintoService.shinto;
  ledger = this._shintoService.ledger;

  qIdx: any;

  answer: any;

  reward = 1;
  
  questions = [
    {q: 'What is the 7th number of the Fibonacci sequence?', a: 8}
  ]

  message: any;

  constructor(private _shintoService: ShintoService) { }
  ngOnInit() {
    this.message = {};
    this.qIdx = this.setQuestion();
  }
  

  setQuestion() {
    return 0
  }

  isCorrect(qIdx, ans) {
    console.log(qIdx, ans)
    if (ans == this.questions[qIdx].a) {
      this.message = {text: `Correct! You have recieved ${this.reward} `, class:'text-success'}
      console.log('Correct')

      this.ledger.push({action: 'mined', quantity: this.reward, rate: this.shinto.value});
      this._shintoService.changeCoins(this.reward);
      this._shintoService.changeValue(1);
    }
    else {
      this.message = {text: `Incorrect, please try again.`, class:'text-danger'}
      console.log('Incorrect')
    }
  }



}
