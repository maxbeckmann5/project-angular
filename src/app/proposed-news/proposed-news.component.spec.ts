import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedNewsComponent } from './proposed-news.component';

describe('ProposedNewsComponent', () => {
  let component: ProposedNewsComponent;
  let fixture: ComponentFixture<ProposedNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProposedNewsComponent]
    });
    fixture = TestBed.createComponent(ProposedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
