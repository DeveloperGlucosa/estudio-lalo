import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EmailService } from './../../_services/email.service';
import { FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import { RecaptchaComponent } from "ng-recaptcha";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  captcha = false;
  
  public activeLang = 'en';

  @ViewChild('myCaptcha') captchaElem: RecaptchaComponent;

  constructor(private translate: TranslateService, private email: EmailService, private formBuilder: FormBuilder) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    
  }

  correoForm = this.formBuilder.group({
    nombre: '',
    correo: '',
    comentarios: ''
  }); 

  ngOnInit(): void {
  }
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse.length>0){
      this.captcha=true;
    }
  }

  onSubmit(): void {  
    let values=this.correoForm.value;
    
    if(this.captcha){
     this.captchaElem.reset();
      this.email.send(values).then(res=>{
        swal.fire(
          'Gracias por contactarnos',
          'En breve nos comunicaremos contigo',
          'success'
        )
        this.correoForm.reset();
      }).catch(err=>{
        swal.fire(
          'Hubo un error al enviar tus datos',
          'Por favor envíanos un correo a cualquiera de nuestros contactos',
          'error'
        )
      });
    }
  }

 

  }

