import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  public activeLang = 'en';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

}
