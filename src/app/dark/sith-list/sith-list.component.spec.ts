import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SithListComponent } from './sith-list.component';

describe('SithListComponent', () => {
  let component: SithListComponent;
  let fixture: ComponentFixture<SithListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SithListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SithListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
