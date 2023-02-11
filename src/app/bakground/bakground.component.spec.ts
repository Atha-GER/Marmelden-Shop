import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakgroundComponent } from './bakground.component';

describe('BakgroundComponent', () => {
  let component: BakgroundComponent;
  let fixture: ComponentFixture<BakgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
