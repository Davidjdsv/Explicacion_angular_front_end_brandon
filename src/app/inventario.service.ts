import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Llamar los observables

export interface Producto{
  id?: number;
  nombre?: string;
  categoria?: string;
  descripcion?: string;
  precio?: number;
  disponible?: boolean;
  fecha_creacion?: string;
  cantidad?: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  //URL de la APi
  private apiUrl = 'http://localhost:8000/api/productos';

  //Obtiene como argumento la apiUrl
  constructor(private http: HttpClient) { }

  // Obtener todos los productos que obtiene por método get por la api
  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Mostrar un solo producto a tráves de su id
  getProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.apiUrl}${id}`);
  }

  // Agregar un producto por método post a esta apiurl
  agregarProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.apiUrl, producto)
  }

  // Eliminar un producto por medio de su id
  eliminarProducto(id: number): Observable<void>{//<void>?
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
