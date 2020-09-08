import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularArtistListComponent } from './singular-artist-list.component';

describe('SingularArtistListComponent', () => {
  let component: SingularArtistListComponent;
  let fixture: ComponentFixture<SingularArtistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingularArtistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingularArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
