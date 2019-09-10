// Importamos todos los objetos que evaluaremos.
import { mensaje} from './string';

describe('Pruebas de strings', () => {
  // Comprobar que el resultado es de un TIPO
  it('Debe regresar un string', () => {
    const respuesta = mensaje('Miguel');
    expect( typeof respuesta ).toBe('string');
  });
  // Comprobar que el resultado CONTENGA ALGO.
  xit('Debe retornar un saludo con el nombre enviado', () => {
    const nombre = 'Miguel'
    const respuesta = mensaje(nombre);
    expect( respuesta ).toContain(nombre);
  });
});
