import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  constructor(private http: HttpClient) { }

  send(dataForm){
    return new Promise((resolve,reject)=>{
      this.http.post(
        "https://estudiofd.com/services/email.php",
        dataForm,
      ).subscribe(response=>{
        // console.log('post resolve: ',response);
        resolve(response);
      }, err=>{
        //this.verificarLogin(err.error);
        console.log('post reject');
        console.log(err);
        reject(err.error);
      });
    });
  }
}
