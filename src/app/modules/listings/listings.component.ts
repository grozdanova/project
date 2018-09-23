import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html'
})
export class ListingsComponent implements OnInit {

  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Step1', routerLink: ['step1']},
      {label: 'Step2', routerLink: ['step2']},
      {label: 'Step3', routerLink: ['step3']}
    ];
  }

}
