import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  public activeLang = 'en';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

}
