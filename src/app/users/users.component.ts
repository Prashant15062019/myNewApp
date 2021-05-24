import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  User:any=[];
  columnDefs = [
		{headerName: 'SR', field: 'id',sortable: true, filter: true },
		{headerName: 'Name', field: 'name',sortable: true, filter: true },
		{headerName: 'Username', field: 'username',sortable: true, filter: true },
		{headerName: 'Address', field: 'address',cellRenderer: params => {
      return params.value.street+", "+params.value.suite+", "+params.value.city+", "+params.value.zipcode;
  },sortable: false, filter: true,resizable:true },
		{headerName: 'Phone', field: 'phone',sortable: true, filter: true },
		{headerName: 'Website', field: 'website',sortable: true, filter: true },
		{headerName: 'Company', field: 'company', cellRenderer: params => {
      return params.value.name},sortable: true, filter: true },
	];

  constructor(private getDataService:GetDataService  ) {
    this.readUser();
   }

  ngOnInit(): void {
  }

  readUser(){
    this.getDataService.getUsers().subscribe((data) => {
     this.User = data;
    })    
  }

}
