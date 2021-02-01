import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerstionsComponent } from './querstions.component';

describe('QuerstionsComponent', () => {
  let component: QuerstionsComponent;
  let fixture: ComponentFixture<QuerstionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerstionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerstionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
