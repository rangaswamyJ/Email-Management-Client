import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDescComponent } from './msg-desc.component';

describe('MsgDescComponent', () => {
  let component: MsgDescComponent;
  let fixture: ComponentFixture<MsgDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
