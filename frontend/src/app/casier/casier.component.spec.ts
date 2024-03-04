import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasierComponent } from './casier.component';

describe('CasierComponent', () => {
  let component: CasierComponent;
  let fixture: ComponentFixture<CasierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
