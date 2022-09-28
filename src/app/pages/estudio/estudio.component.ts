import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {

  public activeLang = 'en';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

}
