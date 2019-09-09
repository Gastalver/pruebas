import { incrementar} from './number';

describe('Pruebas de números', () => {
  //
  it('Si enviamos un numero mayor de 100 debe retornar 100', () => {
    const input = 105;
    const retorno = incrementar(input);
    expect(retorno).toBe(100);
  });
  it('Si enviamos un numero menor de 100 debe retornar el número más uno', () => {
    const input = 50;
    const retorno = incrementar(input);
    expect(retorno).toBe(input + 1);
  });
})
