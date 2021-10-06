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
  private productos = []
  usuario = localStorage.getItem("saveLog")

  constructor(private categoriasService: CategoriasService, private productosService:ProductosService) {}
  ngOnInit(){
    this.categorias = this.categoriasService.getCategorias();
    this.productos = this.productosService.getProducto();
    
  }

  

}
