import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { DataTableSelectionComponent } from '@swimlane/ngx-datatable';
import {HttpClient} from '@angular/common/http'
declare var require: any

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  

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
    return this.registrationForm.get('image')
  }

  get tipo(){
    return this.registrationForm.get("tipo")
  }

  registrationForm = this.formBuilder.group({
    name:['', Validators.required],
    color:['', Validators.required],
    stock:['', Validators.required],
    tipo:['', Validators.required],
    image:['', Validators.required],
    price:['', Validators.required]
  })
  


  /* get name() {return this.RegisterForm.get('name')} */

  constructor(private productoServicio:ProductosService, private router:Router,
     private formBuilder:FormBuilder, private http:HttpClient) { }

  
  usuario = localStorage.getItem("saveLog")
  seleccion = true;
  private tipo_producto:any = []
  private archivo:File = null
  
  ngOnInit() {

    this.productoServicio.getTipoProducto().subscribe(
      (resp) => {this.tipo_producto = resp
                  console.log(resp)}
    )
 
    this.productoServicio.getImagen().subscribe(
      (resp) => {this.tipo_producto = resp
                console.log(resp[0])}
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
    image: [{type: 'required', message: 'imagen es requerido'}],
    price: [{type: 'required', message: 'precio es requerido'}],
  }

 
  /*  agregarP(nombre,color,imagen,stock,tipo,precio){

    let seleccion_stock = this.seleccion
    this.productoServicio.addProducto(nombre.value, color.value, imagen.value, seleccion_stock, precio.value);
    this.router.navigate(['/productos'])
    

  }  */

  submit(nombre,color,imagen,stock, tipo, precio) {

   console.log(this.registrationForm.value)
   let seleccion_stock = this.seleccion
   this.productoServicio.addProducto(nombre.value, color.value, imagen.value, seleccion_stock, precio.value, tipo.value);
   this.router.navigate(['/productos'])
    
    
  }


  captureImage(event){

    const axios = require('axios')
    const STRAPI_BASE_URL ='http://localhost:1337'
    /* guardado de imagen en variable */
    this.archivo = <File>event.target.files[0]
    
    const formData = new FormData();
    formData.append('files', this.archivo)
    axios.post(`${STRAPI_BASE_URL}/upload`, formData)

   this.productoServicio.upImage("imgtest.jpg")
    

  }

  addImg() {

    
    
  }

  loadImage(event){
    
   
    
  }

}
