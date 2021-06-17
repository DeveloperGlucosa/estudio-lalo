import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  captcha = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse.length>0){
      this.captcha=true;
    }
  }

  enviar($event){
    $event.preventDefault()
    console.log('enviar');
    if(this.captcha){
      console.log('enviado');
    }
  }

}
