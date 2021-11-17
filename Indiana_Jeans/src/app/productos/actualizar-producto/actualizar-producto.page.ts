import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { Producto } from '../detalle-productos/producto.model';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage implements OnInit {

  get name(){
    return this.registrationForm.get('name')
  }

  get color(){
    return this.registrationForm.get('color')
  }

  get stock(){
    return this.registrationForm.get('stock')
  }

  get image(){
    return this.registrationForm.get('image')
  }

  get price(){
    return this.registrationForm.get('price')
  }

  get tipo(){
    return this.registrationForm.get('tipo')
  }

  /* VALIDACIONES DEL FORMULARIO */
  registrationForm = this.formBuilder.group({
    name:['', Validators.required],
    color:['', Validators.required],
    stock:['', Validators.required],
    tipo:['', Validators.required],
    image:['', Validators.required],
    price:['', Validators.required]
  })
  


  productos:any = []
  private tipo_producto:any = []
  constructor(private activatedRoute: ActivatedRoute, private productoServicio: ProductosService, private router:Router,
              private formBuilder:FormBuilder) { }

  usuario = localStorage.getItem("saveLog")
  seleccion;
  
  ngOnInit() {

    /* OBTENER EL PRODUCTO POR EL ID */
    this.activatedRoute.paramMap.subscribe( paramMap => {

      const valor = parseInt(paramMap.get('id')) 
      
      this.productoServicio.getProductoById(valor).subscribe(
        (resp) => {this.productos = resp
                  console.log(resp)}
      
      )
     
    })
    
    /* OBTENIENDO EL ESTADO DEL STOCK */
    this.activatedRoute.paramMap.subscribe( paramMap => {

        const valorP = parseInt(paramMap.get('id')) 
        
        this.productoServicio.getProductoById(valorP).subscribe(
          (stockP) => {this.productos["Stock"] = stockP["Stock"]
                      this.seleccion = stockP["Stock"]}
          
        )}) 

        this.productoServicio.getTipoProducto().subscribe(
          (resp) => {this.tipo_producto = resp
                      console.log(resp)}
        ) 
  }

  ionViewWillEnter() {

    this.productoServicio.getTipoProducto().subscribe(
      (resp) => {this.tipo_producto = resp
                  console.log(resp)}
    )
  }

  public errorMessages = {
    name: [{type: 'required', message: 'Nombre es requerido'}],
    color: [{type: 'required', message: 'color es requerido'}],
    stock: [{type: 'required', message: 'stock es requerido'}],
    price: [{type: 'required', message: 'precio es requerido'}],
    image: [{type: 'required', message: 'imagen es requerido'}],
  }

  actualizarProducto(nombre,color,imagen,stock,tipo,precio){

    this.activatedRoute.paramMap.subscribe( paramMap => {

      const valor = parseInt(paramMap.get('id')) 
      
      let seleccion_stock = this.seleccion
      this.productoServicio.updateProducto(nombre.value, color.value, imagen.value, seleccion_stock, precio.value, valor, tipo.value);
      this.router.navigate(['/productos'])
    })} 

  volverCategoria(){
    this.router.navigate(['/productos/']);
  }


}
