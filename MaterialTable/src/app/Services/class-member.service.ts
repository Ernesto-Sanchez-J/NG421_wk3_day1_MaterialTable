import { Injectable } from '@angular/core';

import { IClassMember} from '../Interface/class-member';


@Injectable({
  providedIn: 'root'
})
export class ClassMemberService {

  ClassMemberList: IClassMember[] = [
      {
        Seat: 1,
        Name: 'Rob Luci',
        Grade: 90,
        Passing: true
      },
      {
        Seat: 2,
        Name: 'Nami',
        Grade: 98,
        Passing: true
      },
      {
        Seat: 3,
        Name: 'Ussop',
        Grade: 60,
        Passing: false
      },
      {
        Seat: 4,
        Name: 'Sanji',
        Grade: 78,
        Passing: true
      },
      {
        Seat: 5,
        Name: 'Zoro',
        Grade: 67,
        Passing: false
      },
      {
        Seat: 6,
        Name: 'Chopper',
        Grade: 100,
        Passing: true
      },
      {
        Seat: 7,
        Name: 'Franky',
        Grade: 94,
        Passing: true
      },
      {
        Seat: 8,
        Name: 'Brook',
        Grade: 55,
        Passing: false
      },
      {
        Seat: 9,
        Name: 'Nico Robin',
        Grade: 88,
        Passing: true
      },
      {
        Seat: 10,
        Name: 'Luffy',
        Grade: 49,
        Passing: false
      },
  ];

  constructor() {

  }

  getClass(): IClassMember[] {
    return this.ClassMemberList;
  }
}
