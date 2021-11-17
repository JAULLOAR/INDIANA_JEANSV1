import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private usuarios:any = []
  constructor(private router:Router,  public toastController : ToastController, private http:HttpClient,
              private productoService:ProductosService) { }

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

  async bloqueado(){
    const toast = await this.toastController.create({  
      message: 'El usuario no tiene acceso',   
      duration: 4000  
    });  
    toast.present();  
  }

 
  login_test(form){
    
    var usuario = form.value["usuario"];
    var contra = form.value["contrasenia"];
    let confirmacion
    let testing;
    this.productoService.login(usuario, contra).subscribe(
      (resp) => {testing = resp["user"]
                let captura_rol = testing["role"]
                let rol_usuario = captura_rol["name"]
                console.log(rol_usuario)
                if (testing["confirmed"]) {
                  localStorage.setItem("saveLog", usuario);
                  localStorage.setItem("saveRol", rol_usuario);
                  this.router.navigate(['/home'])
                } 
                else if (testing["confirmed"] == false){
                  this.bloqueado()
                }}
    )
    
    

 /*   if (usuario == "admin" && contra == "admin") {
     this.openToast()
     localStorage.setItem("saveLog", usuario);
     this.router.navigate(['/home'])
   } else { this.incorrecto()
     
   } */
  }




}
