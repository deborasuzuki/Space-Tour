import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewPage } from './crew.page';

describe('CrewPage', () => {
  let component: CrewPage;
  let fixture: ComponentFixture<CrewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
