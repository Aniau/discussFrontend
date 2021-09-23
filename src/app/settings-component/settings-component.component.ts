import { Component, OnInit } from '@angular/core';
import { DarkModeServiceService } from '../service/dark-mode-service.service';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.css']
})
export class SettingsComponentComponent implements OnInit 
{
  public darkMode: boolean = false;
  private body = document.body;

  constructor(private darkModeService: DarkModeServiceService) { }

  ngOnInit(): void 
  {
    this.darkModeService.getDarkMode().subscribe(
      result => 
      {
        this.darkMode = result;
        this.bodyMode(this.darkMode);
      }
    )
  }

  toggleDarkMode(event: any)
  {
    this.darkMode = event.checked; 
    this.darkModeService.setDarkMode(event.checked);

    this.bodyMode(event.checked);
  }

  bodyMode(mode: boolean)
  {
    if(mode === true)
    {
      this.body.style.backgroundColor = "rgb(43, 42, 42)";
    }
    else
    {
      this.body.style.backgroundColor = "rgb(196, 196, 202)";
    }
  }
}
