import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { Router } from '@angular/router';
import { Producto } from './detalle-productos/producto.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  //recibe TODO DE LA API
  private productos:any = []
  private tipo_producto:any = []
  /* selectTabs = 'Chaquetas'; */
  rol = localStorage.getItem("saveRol")
 
  constructor(private ServicioProducto: ProductosService, private route:Router) { }

  ngOnInit() {
    //suscripcion a la API
    this.ServicioProducto.getProducto().subscribe(
      (resp)   => {this.productos = resp
                  console.log(resp)},
      (error)  => {console.log(error)}
    );
  
  
  }

  ionViewWillEnter(){
    this.ServicioProducto.getProducto().subscribe(
      (resp)   => {this.productos = resp},
      (error)  => {console.log(error)}
    ); 

    
  }

  agregarProducto(){

    this.route.navigate(['/agregar-producto'])
  }

  /* filtrarRopa(nombre){
    this.ropaPro = this.ServicioProducto.filtrarProducto(nombre);
    this.route.navigate(['/productos/']);
   console.log(this.ropaPro)
   this.pf = this.ServicioProducto.filtrarProducto(nombre)
   
   
 } */

 
  volverCategoria(){
    this.route.navigate(['/categorias/']);
  }


}
