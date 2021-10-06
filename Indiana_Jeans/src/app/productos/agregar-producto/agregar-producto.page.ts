import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  data = [
    {
      name: 'Stock',
      selected: false
    },     
  ]



  constructor(private productoServicio:ProductosService, private router:Router) { }

  usuario = localStorage.getItem("saveLog")
  seleccion = true;
  

  ngOnInit() {
    
  }

 
   agregarP(nombre,color,imagen,stock,precio){

    let seleccion_stock = this.seleccion
    this.productoServicio.addProducto(nombre.value, color.value, imagen.value, seleccion_stock, precio.value);
    this.router.navigate(['/productos'])
    

  } 

}
