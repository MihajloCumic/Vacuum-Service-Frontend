import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumTableComponent } from './vacuum-table.component';

describe('VacuumTableComponent', () => {
  let component: VacuumTableComponent;
  let fixture: ComponentFixture<VacuumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacuumTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacuumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
