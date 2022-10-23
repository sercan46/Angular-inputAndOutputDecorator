import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() personList: {};

  @Output() sendPersonDetail = new EventEmitter<any>();
  persons = [];
  ngOnInit(): void {
  }
  ngOnChanges() {
    this.personList ? this.persons.push(this.personList) : []
  }
  sendData(person) {
    this.sendPersonDetail.emit(person)
  }

}
