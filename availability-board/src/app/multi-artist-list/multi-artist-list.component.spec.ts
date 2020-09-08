import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiArtistListComponent } from './multi-artist-list.component';

describe('MultiArtistListComponent', () => {
  let component: MultiArtistListComponent;
  let fixture: ComponentFixture<MultiArtistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiArtistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
