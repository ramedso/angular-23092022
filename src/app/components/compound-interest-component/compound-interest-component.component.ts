import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-interest-component',
  templateUrl: './compound-interest-component.component.html',
  styleUrls: ['./compound-interest-component.component.css'],
})
export class CompoundInterestComponentComponent implements OnInit {
  @Input() money: string;
  @Input() tax: string;
  @Input() months: string;

  getAmount() {
    return Number(this.money) * (1 + Number(this.tax)) ** Number(this.months);
  }

  isEmpty() {
    if (this.money == '' || this.tax == '' || this.months == '') {
      document.getElementById('result').innerHTML = '';
    } else {
      return this.getAmount();
    }
  }
  constructor() {}

  ngOnInit() {}
}
