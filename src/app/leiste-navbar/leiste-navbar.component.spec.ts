import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisteNavbarComponent } from './leiste-navbar.component';

describe('LeisteNavbarComponent', () => {
  let component: LeisteNavbarComponent;
  let fixture: ComponentFixture<LeisteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisteNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeisteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
