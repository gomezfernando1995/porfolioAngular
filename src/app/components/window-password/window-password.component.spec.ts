import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowPasswordComponent } from './window-password.component';

describe('WindowPasswordComponent', () => {
  let component: WindowPasswordComponent;
  let fixture: ComponentFixture<WindowPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindowPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
