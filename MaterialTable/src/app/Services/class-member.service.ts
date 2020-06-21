import { Injectable } from '@angular/core';
import { ClassMember} from '../data/data.service';
import { IClassMember} from '../Interface/class-member';
import { threadId } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class ClassMemberService {

  ClassMember: IClassMember[] = [];

  constructor() {
    this.ClassMember = ClassMember;
  }

  getClass(): IClassMember[] {
    return this.ClassMember;
  }
}
