import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  payment = 30250;
  paymentDate = '28.04.2022';
  dept = '134000';

  paymentHistory = [
    {
      position: 1,
      date: '28.03.2022',
      payment: '30250',
      status: 'оплачено',
    },
    {
      position: 2,
      date: '28.02.2022',
      payment: '30250',
      status: 'оплачено',
    },
    {
      position: 3,
      date: '28.01.2022',
      payment: '30250',
      status: 'оплачено',
    },
    {
      position: 4,
      date: '28.12.2021',
      payment: '30250',
      status: 'оплачено',
    },
    {
      position: 5,
      date: '28.11.2021',
      payment: '30250',
      status: 'оплачено',
    }
  ];

  displayedColumns = ['position', 'date', 'payment', 'status'];

  constructor() { }

  ngOnInit(): void {
  }

}
