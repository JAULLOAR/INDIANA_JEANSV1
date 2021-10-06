import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  usuario = localStorage.getItem("saveLog")
  private categorias = []

  constructor(private categoriaService:CategoriasService, private route:Router) { }

  ngOnInit() {

    this.categorias = this.categoriaService.getCategorias();
  }

  redirigirProducto(nombre) {
      
    if (nombre == "nombreCategoria") {
        console.log("hola")
    } else {
      console.log(nombre)
      
    }
    
  }

  volverHome() {
    this.route.navigate(['/home/']);
  }

}
