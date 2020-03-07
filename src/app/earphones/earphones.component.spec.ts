import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarphonesComponent } from './earphones.component';

describe('EarphonesComponent', () => {
  let component: EarphonesComponent;
  let fixture: ComponentFixture<EarphonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarphonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
