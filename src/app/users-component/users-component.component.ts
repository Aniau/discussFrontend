import { Component, OnInit } from '@angular/core';
import { DarkModeServiceService } from '../service/dark-mode-service.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit 
{
  public darkMode: boolean = false;

  constructor(private darkModeService: DarkModeServiceService) { }

  ngOnInit(): void {
    this.darkModeService.getDarkMode().subscribe(
      (result) => {
        console.log(result);
        this.darkMode = result;
      }
    )
  }
}
