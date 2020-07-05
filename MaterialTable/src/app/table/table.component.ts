import { Component, OnInit, ViewChild } from '@angular/core';
import { IClassMember } from '../Interface/class-member';
import { MatTableDataSource } from '@angular/material/table';
import { ClassMemberService } from '../Services/class-member.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Seat', 'Name', 'Grade', 'Passing'];
  dataSource: MatTableDataSource<IClassMember>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor(private ClassmemberService: ClassMemberService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.ClassmemberService.getClass());
    this.dataSource.sort = this.sort;
  }

}
