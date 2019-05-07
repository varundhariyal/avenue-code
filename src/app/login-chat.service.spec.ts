import { TestBed } from '@angular/core/testing';

import { LoginChatService } from './login-chat.service';

describe('LoginChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginChatService = TestBed.get(LoginChatService);
    expect(service).toBeTruthy();
  });
});
