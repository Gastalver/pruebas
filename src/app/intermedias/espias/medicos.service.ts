import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get('...').pipe(
      map(
        (resp: any)  => {
          return resp.medicos;
      })
    );
  }

  agregarMedico( medico: any ) {
    const medicoNuevo = { nombre: 'Juan Prieto'}
    return this.http.post('...', medicoNuevo ).pipe(
      map(
        (resp: any) => {
          return resp.medico;
        } )
    );
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' ).pipe(
      map(
        (resp: any) => {
          // tslint:disable-next-line:no-unused-expression
         resp.medico;
        }
      )
  );

  }


}
