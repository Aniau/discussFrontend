import { TestBed } from '@angular/core/testing';

import { SignalrConnectionService } from './signalr-connection.service';

describe('SignalrConnectionService', () => {
  let service: SignalrConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalrConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
