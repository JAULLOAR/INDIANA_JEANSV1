import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias/categorias.service';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private categorias = []
  private productos:any = []
  usuario = localStorage.getItem("saveLog")
  rol = localStorage.getItem("saveRol")

  constructor(private categoriasService: CategoriasService, private productosService:ProductosService) {}
  ngOnInit(){
    this.categorias = this.categoriasService.getCategorias();
    this.productosService.getProducto().subscribe(
      (resp)   => {this.productos = resp
                  },
      (error)  => {console.log(error)}
    );
    
  }
  
  ionViewWillEnter(){
    this.categorias = this.categoriasService.getCategorias();
    this.productosService.getProducto().subscribe(
      (resp)   => {this.productos = resp
                  },
      (error)  => {console.log(error)}
    );
  }

  

}
