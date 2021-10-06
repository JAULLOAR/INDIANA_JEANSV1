import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  
  private categorias = [

    {id: 1,
    nombre: "Nuevos",
    imagen: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"
    },
    {id: 2,
      nombre: "Zapatillas",
      imagen: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      },
      {id:3,
      nombre: "Ropa",
      imagen: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
    },
    {id:4,
     nombre: "Accesorios",
     imagen:"https://images.unsplash.com/photo-1623040594022-3f46dd09c260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} 
  ]

  constructor() { }

  getCategorias() {
    return [...this.categorias]
  }
}
