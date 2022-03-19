import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

fdescribe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have add function',
    () => {
      expect(service.add).toBeTruthy();
    });
  it('add function should run',()=>{
    expect(service.add(1,2)).toEqual(3);
  })
});
