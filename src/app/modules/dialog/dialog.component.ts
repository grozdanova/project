import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input() dialog: boolean;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() add: EventEmitter<Object> = new EventEmitter<Object>();
  @Input() dialogHeader: string;
  @Input() employee: Object;

  constructor() { }

  functionToCloseDialog() {
    this.dialog = false; // closes/hides the dialog box
    this.employee = {};
    this.change.emit(this.dialog);
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    // this.add.emit(form.value.data);
    this.add.emit(form);
  }
}
