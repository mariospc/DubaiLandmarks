import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listAttractionComponent } from './list-attractions.component';

describe('listAttractionComponent', () => {
  let component: listAttractionComponent;
  let fixture: ComponentFixture<listAttractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ listAttractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(listAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
