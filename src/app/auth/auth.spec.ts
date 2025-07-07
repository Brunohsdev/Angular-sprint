import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid credentials', () => {
    const result = service.login('admin', '123456');
    expect(result).toBeTrue();
  });

  it('should return false for invalid username', () => {
    const result = service.login('usuarioErrado', '123456');
    expect(result).toBeFalse();
  });

  it('should return false for invalid password', () => {
    const result = service.login('admin', 'senhaErrada');
    expect(result).toBeFalse();
  });

  it('should return false for both invalid username and password', () => {
    const result = service.login('errado', 'errado');
    expect(result).toBeFalse();
  });
});
