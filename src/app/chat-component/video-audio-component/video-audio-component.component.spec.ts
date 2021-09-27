import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAudioComponentComponent } from './video-audio-component.component';

describe('VideoAudioComponentComponent', () => {
  let component: VideoAudioComponentComponent;
  let fixture: ComponentFixture<VideoAudioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAudioComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAudioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
