import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth-service.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, AuthService]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation if user is authenticated', () => {
    spyOn(authService, 'isAuthenticatedUser').and.returnValue(true);
    const canActivate = guard.canActivate();
    expect(canActivate).toBe(true);
  });

  it('should redirect to login page if user is not authenticated', () => {
    spyOn(authService, 'isAuthenticatedUser').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigate');
    const canActivate = guard.canActivate();
    expect(canActivate).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
