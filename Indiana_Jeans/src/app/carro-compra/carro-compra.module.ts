import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarroCompraPageRoutingModule } from './carro-compra-routing.module';
import { CarroCompraPage } from './carro-compra.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarroCompraPageRoutingModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  declarations: [CarroCompraPage]
})
export class CarroCompraPageModule {}
