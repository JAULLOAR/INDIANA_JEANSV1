import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,  public toastController : ToastController) { }

  ngOnInit() {
  }

  async openToast(){
    const toast = await this.toastController.create({  
      message: 'Ha inicado sesion correctamente',   
      duration: 4000  
    });  
    toast.present();  
  }

  async incorrecto(){
    const toast = await this.toastController.create({  
      message: 'Usuario o contrasena incorrecta',   
      duration: 4000  
    });  
    toast.present();  
  }

  login(form){
    
    var usuario = form.value["usuario"];
    var contra = form.value["contrasenia"];

   if (usuario == "admin" && contra == "admin") {
     this.openToast()
     localStorage.setItem("saveLog", usuario);
     this.router.navigate(['/home'])
   } else { this.incorrecto()
     
   }
  }



}
