import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideocardComponent } from './home-videocard.component';

describe('HomeVideocardComponent', () => {
  let component: HomeVideocardComponent;
  let fixture: ComponentFixture<HomeVideocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVideocardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
