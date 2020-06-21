import { TestBed } from '@angular/core/testing';

import { ClassMemberService } from './class-member.service';

describe('ClassMemberService', () => {
  let service: ClassMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
