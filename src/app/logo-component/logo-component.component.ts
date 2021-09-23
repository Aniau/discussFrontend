import { Component, OnInit } from '@angular/core';
import { DarkModeServiceService } from '../service/dark-mode-service.service';

@Component({
  selector: 'app-logo-component',
  templateUrl: './logo-component.component.html',
  styleUrls: ['./logo-component.component.css']
})
export class LogoComponentComponent implements OnInit {

  public darkMode: boolean = false;
  constructor(private darkModeService: DarkModeServiceService) { }

  ngOnInit(): void {
    this.darkModeService.getDarkMode().subscribe(
      (result) => {
        this.darkMode = result;
        console.log(this.darkMode);
      }
    )
  }

}
