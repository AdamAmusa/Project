import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForcastPage } from './forcast.page';

describe('ForcastPage', () => {
  let component: ForcastPage;
  let fixture: ComponentFixture<ForcastPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForcastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
