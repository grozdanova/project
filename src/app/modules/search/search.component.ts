import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { PouchDBService } from '../../pouchdb.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public myForm: FormGroup;
  private dataSubcr: Subscription;

  public data = [
      {
        "id": 1,
        "name": "cots",
        "city": "2222",
        "department": "qw77790"
      },
      {
        "id": 3,
        "name": "rtyyy",
        "city": "bvb",
        "department": "6777777"
      }
    ];

    public events = [
      {
          "title": "All Day Event",
          "start": "2016-01-01"
      },
      {
          "title": "Long Event",
          "start": "2016-01-07",
          "end": "2016-01-10"
      },
      {
          "title": "Repeating Event",
          "start": "2016-01-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2016-01-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2016-01-11",
          "end": "2016-01-13"
      }
  ];

  constructor(private formBuilder: FormBuilder, private dbService: PouchDBService) {

    this.myForm = formBuilder.group({
      // 'accCode': [ defaultForm['decompte'] ||  '' ],
      'number': [''],
      'caseRef': [''],
      'name': [''],
      'vat': [''],
      'siret': [''],
      // 'country': [ defaultForm['countryCode'] || '' ],
      'city': [''],
      'zip': [''],
      'address': [''],
      'address2': [''],
    });
  }

  ngOnInit() {
    this.dataSubcr = this.dbService.list().then( allDoc => {
      console.log('All rows: ', allDoc.rows);
    });
  }

  onSearch(formValue: Object) {
    console.log(formValue);

    this.dbService.save(formValue);
  }
}
