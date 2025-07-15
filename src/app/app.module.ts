import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { FormsModule } from '@angular/forms';
// import { ComponenteVentasComponent } from './componente-ventas/componente-ventas.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    // ComponenteVentasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
