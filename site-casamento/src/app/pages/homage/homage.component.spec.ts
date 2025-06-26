import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomageComponent } from './homage.component';

describe('HomageComponent', () => {
  let component: HomageComponent;
  let fixture: ComponentFixture<HomageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
