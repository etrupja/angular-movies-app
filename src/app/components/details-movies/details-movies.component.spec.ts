import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMoviesComponent } from './details-movies.component';

describe('DetailsMoviesComponent', () => {
  let component: DetailsMoviesComponent;
  let fixture: ComponentFixture<DetailsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
