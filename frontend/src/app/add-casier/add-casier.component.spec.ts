import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasierComponent } from './add-casier.component';

describe('AddCasierComponent', () => {
  let component: AddCasierComponent;
  let fixture: ComponentFixture<AddCasierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCasierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCasierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
