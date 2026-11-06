import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslateModule.forRoot()],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle mobile menu', () => {
    expect(component.isMobileMenuOpen()).toBe(false);
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);
    component.closeMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should close mobile menu on Escape key', () => {
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);
    component.onEscapeKey();
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('deve conter o link de navegacao para o blog', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const blogLinks = Array.from(compiled.querySelectorAll('a')).filter(
      (a) => a.getAttribute('routerLink') === '/blog'
    );
    expect(blogLinks.length).toBeGreaterThanOrEqual(1);
  });
});
