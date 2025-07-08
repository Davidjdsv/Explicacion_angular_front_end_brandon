import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';

const routes: Routes = [
  {
    path: 'inventario',
    component: InventarioComponent
  },
  {
    path: '**',
    redirectTo: 'inventario'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { RouterModule };

