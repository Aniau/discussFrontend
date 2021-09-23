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

  constructor(private darkModeService: DarkModeServiceService) { }

  ngOnInit(): void {
  }

  toggleDarkMode(event: any)
  {
    this.darkMode = event.checked; 
    this.darkModeService.setDarkMode(event.checked);
    const body = document.body;
    if(event.checked === true)
    {
      body.style.backgroundColor = "rgb(43, 42, 42)";
    }
    else
    {
      body.style.backgroundColor = "rgb(196, 196, 202)";
    }
  }
}
