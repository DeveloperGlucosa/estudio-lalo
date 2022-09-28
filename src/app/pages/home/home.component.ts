import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { faWha } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faWhatsapp = faWhatsapp;
  public activeLang = 'en';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }


}
