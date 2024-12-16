import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeventsComponent } from './createevents.component';

describe('CreateeventsComponent', () => {
  let component: CreateeventsComponent;
  let fixture: ComponentFixture<CreateeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateeventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
