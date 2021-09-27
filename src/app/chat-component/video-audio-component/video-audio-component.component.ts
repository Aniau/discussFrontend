import { Component, OnInit } from '@angular/core';
import { DarkModeServiceService } from 'src/app/service/dark-mode-service.service';

@Component({
  selector: 'app-video-audio-component',
  templateUrl: './video-audio-component.component.html',
  styleUrls: ['./video-audio-component.component.css']
})
export class VideoAudioComponentComponent implements OnInit {
  public darkMode: boolean = false;

  constructor(private darkModeService: DarkModeServiceService) { }

  ngOnInit(): void {
    this.darkModeService.getDarkMode().subscribe(
      (result) => {
        this.darkMode = result;
      }
    )

    const vgaConstraints =  { audio: true, video: { width: 1280, height: 720 } }; 
let browser = <any>navigator;
    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);
console.log(browser);

    // navigator.mediaDevices.getUserMedia(vgaConstraints)
    //   .then((stream)=>{
    //       stream.getTracks().forEach((track)=>{
    //         console.log(track);       
    //   });
    // })
  }

  
}
