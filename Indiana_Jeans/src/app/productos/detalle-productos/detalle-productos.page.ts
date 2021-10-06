import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductosService } from '../productos.service';
import { Producto } from './producto.model';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  datosAr : Producto
  usuario = localStorage.getItem("saveLog")

  constructor(private activatedRoute: ActivatedRoute, private productoServicio: ProductosService, private route:Router,
     public alertController: AlertController, public toastController : ToastController) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe( paramMap => {

      const valor = parseInt(paramMap.get('id')) 
      

      this.datosAr =  this.productoServicio.getProductoById(valor)
      console.log(this.datosAr)

    } )
  }

  eliminar(){

    console.log ("eliminado")
    this.productoServicio.deleteProducto(this.datosAr.id)
    this.route.navigate(['/productos/']);
    
    
  }

  async openToast(){
    const toast = await this.toastController.create({  
      message: 'Su compra se ha realizado exitosamente',   
      duration: 4000  
    });  
    toast.present();  

  }

  comprarProducto() {
    this.alertController.create({
      header: 'Alerta de compra',
      message: '¿Esta seguro que desea comprar?',
      buttons: [
        {
          text: 'Si, comprar',
          handler: () => {
            this.openToast();
            this.route.navigate(['/home/']);

          }
        },
        {
          text: 'No, devolverme',
          handler: () => {
            this.route.navigate(['/productos/']);
          }
        },
      
      ]
    }).then(res => {
      res.present();
    });
  } 
  

  

}
