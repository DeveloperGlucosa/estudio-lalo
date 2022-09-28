import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  currentRoute:String;
  public activeLang = 'es';
  scrolling:boolean = false;
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    this.currentRoute = this.router.url;
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    window.scrollTo(0, 0);
    window.onscroll = () => {
      this.scrolling = ( window.scrollY > 100) ? true : false
    };
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
