import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos = [

    {
      id: 1,
      nombre: 'Sweater',
      color: 'Negro',
      imagen: 'https://images.unsplash.com/photo-1611312449545-94176309c857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80',
      stock: true,
      precio: 30000
    },

    {
      id: 2,
      nombre: 'Chaqueta',
      color: 'Blanco',
      imagen: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=669&q=80',
      stock: false,
      precio: 25000
    },

    {
      id: 3,
      nombre: 'Pantalon',
      color: 'Blanco',
      imagen: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      stock: true,
      precio: 250000
    }, {
      id: 4,
      nombre: 'Camisa',
      color: 'Negro',
      imagen: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80',
      stock: true,
      precio: 34990
    }

  ]

  constructor() { }

  getProducto(){
    return [...this.productos]
  }

  getProductoById(id:number){
    return {
      ...this.productos.find(serv => {
      return serv.id === id
      })}
  }

  addProducto(nombreA:string, colorA:string,  imagenA:string, stockA:boolean, precioA:number ){

    this.productos.push(
      {
        id : (this.productos.length + 1),
        nombre : nombreA,
        color : colorA,
        imagen : imagenA,
        stock: stockA,    
        precio : precioA
        
      }
    )
  }

  deleteProducto(id:number) {
      
    this.productos = this.productos.filter(serv => {
                      return serv.id !== id
                    })
      
     
  
      
    } 
  
    filtrarProducto(nombre:string) {
      {this.productos = this.productos.filter(serv => {
        return serv.nombre == nombre
      })}
      
    }

  

}
