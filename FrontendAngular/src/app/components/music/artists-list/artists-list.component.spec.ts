import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListComponent } from './artists-list.component';

describe('ArtistsListComponent', () => {
  let component: ArtistsListComponent;
  let fixture: ComponentFixture<ArtistsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistsListComponent]
    });
    fixture = TestBed.createComponent(ArtistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
