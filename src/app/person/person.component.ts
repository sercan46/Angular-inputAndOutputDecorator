import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }
  person:{}
  ngOnInit(): void {
  }

  addNewPerson(name:string,phone:string){
    this.person={
      name:name,
      phone:phone
    }
  }
  getPerson(person){
    let itemName=(document.getElementById('name') as HTMLInputElement);
    let itemPhone=(document.getElementById('phone') as HTMLInputElement);
    itemName.value=person.name;
    itemPhone.value=person.phone;
  }
  
}
