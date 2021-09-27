import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DarkModeServiceService } from '../service/dark-mode-service.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.css']
})
export class SettingsComponentComponent implements OnInit 
{
  public darkMode: boolean = false;
  private body = document.body;
  public dataSrc: ImageData;  
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public phoneFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private darkModeService: DarkModeServiceService) { }

  ngOnInit(): void 
  {
    this.darkModeService.getDarkMode().subscribe(
      result => 
      {
        this.darkMode = result;
        console.log(this.darkMode);
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
      this.body.style.backgroundColor = "#000f1cff";
    }
  }

  uploadMainPicture(event: any)
  {
    console.log(event);
    let reader = new FileReader();
    reader.onload = (e: any) => 
    {
      let image = new Image();
      image.src = e.target.result;
      image.onload = rs => 
      {
        let imgBase64Path = e.target.result;
        console.log(imgBase64Path);
        this.dataSrc = imgBase64Path;
      };
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
