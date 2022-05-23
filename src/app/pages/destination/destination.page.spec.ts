import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationPage } from './destination.page';

describe('DestinationPage', () => {
  let component: DestinationPage;
  let fixture: ComponentFixture<DestinationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinationPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
