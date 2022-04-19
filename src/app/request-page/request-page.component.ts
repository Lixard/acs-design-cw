import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent implements OnInit {

  files = [
    {
      name: 'ИНН.png'
    },
    {
      name: 'СНИЛС.png'
    },
    {
      name: 'Выписка с зарплатной карты.docx'
    },
    {
      name: 'Справка о доходе.docx'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
