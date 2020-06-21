import { Component, OnInit } from '@angular/core';
import { IClassMember } from '../Interface/class-member';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Seat', 'Name', 'Grade', 'Passing'];


  constructor() { }

  ngOnInit(): void {
  }

}
