import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreExams } from './explore-exams';

describe('ExploreExams', () => {
  let component: ExploreExams;
  let fixture: ComponentFixture<ExploreExams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreExams],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreExams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
