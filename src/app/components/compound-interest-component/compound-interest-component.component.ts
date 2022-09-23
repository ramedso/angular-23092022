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
  constructor() {}

  ngOnInit() {}
}
