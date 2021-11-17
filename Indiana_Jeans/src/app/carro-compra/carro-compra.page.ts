import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos/productos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.page.html',
  styleUrls: ['./carro-compra.page.scss'],
})
export class CarroCompraPage implements OnInit {

  constructor(private productoService:ProductosService, private http: HttpClient) { }

  usuario = localStorage.getItem("saveLog")
  carro_compra:any = []
  public columns: any;
  public rows: any;
  lista:any = []



  ngOnInit() {
  this.productoService.getCarroCompra(this.usuario).subscribe(
    (resp) => {this.carro_compra = resp
              }
  )

  this.columns = [
    { name: 'Id',
      prop: 'id'},
    { name: 'Nombre',
      prop: 'Nombre'},
    { name: 'Color',
      prop: 'Color'},
    { name: 'Precio',
      prop: 'Precio'}
      ]
   /*  { name: 'Nombre'},
    { name: 'Tipo' },
    { name: 'Color' },
    { name: 'Precio' }
  ]; */
  console.log(this.columns)

  this.productoService.getCarroCompra(this.usuario).subscribe(

    (resp) => { 
                this.rows = resp
                console.log(resp)}
  )

 /*  this.http.get(this.carro_compra).subscribe(
    (resp) =>{this.lista = resp
      console.log(resp)
    }
  ) */
  
  }

  

}
