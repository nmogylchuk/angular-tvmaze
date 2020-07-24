import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmazePageComponent } from './tvmaze-page.component';

describe('TvmazePageComponent', () => {
  let component: TvmazePageComponent;
  let fixture: ComponentFixture<TvmazePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvmazePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvmazePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
