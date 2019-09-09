import { usuarioLogueado} from './boolean';

describe('Pruebas de booleanos', () => {
  it('Debe regresar TRUE', () => {
    const respuesta =  usuarioLogueado();
    expect(respuesta).toBeTruthy();
  });
});
