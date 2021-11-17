import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' //conectarse a la API
@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  private productos:any = [];
  

  constructor(private http:HttpClient) { }

  getProducto(){
    return this.http.get('http://localhost:1337/productos');
    
    
  }

  getProductoById(id:number){ 
      return this.http.get('http://localhost:1337/productos/' + id + "")
  }

  addProducto(nombreA:string, colorA:string,  imagenA:string, stockA:boolean, precioA:number, tipoA:string ){
    this.http.post('http://localhost:1337/productos/', {Nombre:nombreA, Color:colorA, ImagenURL:imagenA, Stock:stockA, Precio:precioA, tipo:tipoA}).subscribe()
  }

  updateProducto(nombreA:string, colorA:string,  imagenA:string, stockA:boolean, precioA:number, id:number, tipoA:string) {    
    this.http.put('http://localhost:1337/productos/' + id, {Nombre:nombreA, Color:colorA, ImagenURL:imagenA, Stock:stockA, Precio:precioA, tipo:tipoA}).subscribe()
  }

  login(usuario, contra){
    return this.http.post('http://localhost:1337/auth/local', {identifier:usuario, password:contra})
  }

  deleteProducto(id:number) {
      
  /*   this.productos = this.productos.filter(serv => {
                      return serv.id !== id
                    })     */
      this.http.delete('http://localhost:1337/productos/' + id +"").subscribe()

    } 

  getTipoProducto() {
      return this.http.get('http://localhost:1337/tipo-productos');
  }

  compra_producto(nombre:string, precio:number, usuario:string, color:string, tipo:string) {
      this.http.post('http://localhost:1337/carro-compras/',{Nombre:nombre, Precio:precio, Usuario:usuario, Color:color, Tipo:tipo}).subscribe()
  }

  getCarroCompra(nombre) {
    return this.http.get('http://localhost:1337/carro-compras?Usuario_contains='+ nombre)
  }

  getImagen(){
    return this.http.get('http://localhost:1337/Prueba-imgs')
  }

  upImage(img){
    this.http.post('http://localhost:1337/Prueba-imgs',{Imagen:img})
  }
  
  /* filtrarProducto(nombre:string) {
      {this.productos = this.productos.filter(serv => {
        return serv.nombre == nombre
      })}
      
     
      this.http.get('http://localhost:1337/Productos?Color_contains=' + nombre +"").subscribe()
     
      
    }
 */


  

}
