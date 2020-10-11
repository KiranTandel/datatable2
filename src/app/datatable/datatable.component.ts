import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  public editing = {};
  public selected = [];
  public myRows: [];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    console.log(this.editing);
    this.getUsers();
  }

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  columns2 = [{ prop: 'id' }, { name: 'name' }, { name: 'address' }, { name: 'email' }];

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.myRows = data;
      }
    );
  }

}
