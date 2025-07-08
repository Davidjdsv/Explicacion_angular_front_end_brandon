import { Component, OnInit } from '@angular/core';
import { InventarioService, Producto } from 'src/app/inventario.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{
  productos: Producto[] = [];
  nuevoProducto = {
    nombre: '',
    categoria: '',
    descripcion: '',
    precio: 0,
    disponible: true,
    fecha_creacion: new Date().toString().split('T')[0],
    cantidad: 0
  };

  mensaje: string = '';

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.inventarioService.getProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
      },
      error: (err) => this.mensaje = "Error al cargar productos",
    });
  }

  agregarProdcuto(): void {
    this.inventarioService.agregarProducto(this.nuevoProducto).subscribe({
      next: (respuesta) => {
        this.obtenerProductos();
        this.mensaje = "Producto agregado exitosamente";
        this.nuevoProducto = {
          nombre: '',
          categoria: '',
          descripcion: '',
          precio: 0,
          disponible: true,
          fecha_creacion: new Date().toString().split('T')[0],
          cantidad: 0
        };
      },
      error: (err) => this.mensaje = "Error al agregar el producto"
    })
  }

  eliminarProducto(id: number): void {
    this.inventarioService.eliminarProducto(id).subscribe({
      next: () => {
        this.obtenerProductos();
        this.mensaje = "Producto eliminado";
      },
      error: (err) => this.mensaje = "Error al eliminar el producto"
    })
  }
}