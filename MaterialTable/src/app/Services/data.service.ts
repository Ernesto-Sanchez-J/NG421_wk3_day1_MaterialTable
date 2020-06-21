import { Injectable } from '@angular/core';
import { ClassMember} from '../Interface/class-member';

const ClassMember: ClassMember[] = [
  {
    Seat: 1,
    Name: 'Rob Luci'
    Grade: 90,
    Passing: true
  },

];
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
