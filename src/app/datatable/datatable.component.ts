import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  userForm:FormGroup;
  public editing = {};
  editRowID:any='';
  public selected = [];
  public myRows:Users[] = [];

  constructor(private userService: UsersService,private fb:FormBuilder) {
    this.userForm=fb.group({
      value:['']
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  // rows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' }
  // ];
  // columns = [{prop:'checkbox'},{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  columns2 = [
    { prop: 'id' }, { name: 'Name' }, { name: 'Address' }, { name: 'Email' }];

  updateValue(event,row,cell,rowIndex) {
    debugger
    let id= row.id;
    alert('target:-'+event.target.value);
    this.userService.updateUser(id,event.target.value).subscribe((data)=>{
      alert(JSON.stringify(data)+'/Updated !');
      this.getUsers();
    });
    this.editing[rowIndex + '-' + cell] = false;

  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.myRows = data;
      }
    );
  }

  onSelect(event) {

  }

  Edit(val){
    this.editRowID= val;
  }

  onEdit(id){
    // alert(rowIndex);
    console.log(id);
  }
  onDelete(id){
    this.userService.deleteUsers(id).subscribe(()=>{
      alert(`Deleted`);
      this.getUsers();
    });
  }

}
