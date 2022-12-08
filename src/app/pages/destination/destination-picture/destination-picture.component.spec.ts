import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationPictureComponent } from './destination-picture.component';

describe('DestinationPictureComponent', () => {
  let component: DestinationPictureComponent;
  let fixture: ComponentFixture<DestinationPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
