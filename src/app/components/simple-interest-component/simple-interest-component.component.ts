import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-interest-component',
  templateUrl: './simple-interest-component.component.html',
  styleUrls: ['./simple-interest-component.component.css'],
})
export class SimpleInterestComponentComponent implements OnInit {
  @Input() money: string;
  @Input() tax: string;
  @Input() months: string;

  getAmount() {
    return Number(this.money) * Number(this.tax) * Number(this.months);
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
