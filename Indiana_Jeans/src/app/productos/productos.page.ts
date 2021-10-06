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

  ropaPro 
  private productos = []
  selectTabs = 'Chaquetas';
  constructor(private ServicioProducto: ProductosService, private route:Router) { }

  ngOnInit() {
    this.productos = this.ServicioProducto.getProducto();
    
    
  }

  ionViewWillEnter(){
    this.productos = this.ServicioProducto.getProducto();
    
  }

  agregarProducto(){

    this.route.navigate(['/agregar-producto'])
  }

  filtrarRopa(nombre){
     this.ropaPro = this.ServicioProducto.filtrarProducto(nombre);
     this.route.navigate(['/productos/']);
    console.log(this.ropaPro)
  }

  volverCategoria(){
    this.route.navigate(['/categorias/']);
  }


}
