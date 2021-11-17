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
  productos:any = []
  usuario = localStorage.getItem("saveLog")
  rol = localStorage.getItem("saveRol")
  carro = localStorage.getItem("carros")
  carro_compra:any = []
  constructor(private activatedRoute: ActivatedRoute, private productoServicio: ProductosService, private route:Router,
     public alertController: AlertController, public toastController : ToastController) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe( paramMap => {

      const valor = parseInt(paramMap.get('id')) 
      
      this.productoServicio.getProductoById(valor).subscribe(
        (resp) => {this.productos = resp
                  console.log(resp)}
        
      )
    } )


  }

  eliminar(){

    console.log ("eliminado")
  

    this.activatedRoute.paramMap.subscribe( paramMap => {

      const valor = parseInt(paramMap.get('id')) 
      
      this.productoServicio.deleteProducto(valor)
      this.route.navigate(['/productos'])

    console.log(valor)

    } )    
  }

  editar(){
    /* this.route.navigate(['/productos/']); */
    this.activatedRoute.paramMap.subscribe( paramMap => {

      const valor = parseInt(paramMap.get('id')) 
      
      this.route.navigate(['/productos/actualizar-producto/' + valor]);

    

    } )  

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
            let nombre = this.productos["Nombre"]
            let precio = this.productos["Precio"]
            let usuario = this.usuario
            let color = this.productos["Color"]
            let tipo = this.productos["tipo"]
            this.productoServicio.compra_producto(nombre,precio,usuario,color,tipo)
            console.log(usuario) 
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
