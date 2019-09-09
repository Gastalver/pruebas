import { Jugador} from './class';

describe('Pruebas de clase', () => {
    // beforeAll(); Una vez por describe al inicio
    // afterAll(); Una vez por describe al final
    // beforeEach(); Una vez antes de cada it.
    // afterEach(); Una vez despues de cada it

    // Declaramos el jugador de prueba aquí para no repetirlo en cada prueba
    let jugador = new Jugador();

    beforeAll(() => {
      // console.log('beforeAll');
    });

    afterAll( () => {
      // console.log('afterAll');

    });
    beforeEach(() => {
      // console.log('beforeEach');
      // Restablecemos la propiedad hp a 100 antes de cada prueba para que no afecte el resultado anterior
      // jugador.hp = 100; Mejor lo hacemos reasignando un jugador nuevo, para restabler TODAS las propiedades que tuviera.
      jugador = new Jugador();
    });

    afterEach(() => {
      // console.log('afterEach');
    });



    it('Si envío 20 de daño debe retornar 80 de hp', () => {
      // const jugador = new Jugador();
      const respuesta = jugador.recibeDanio(20);
      expect(respuesta).toBe(80);
    });

    it('Si envío 50 de daño debe retornar 50 de hp', () => {
      // const jugador = new Jugador();
      const respuesta = jugador.recibeDanio(50);
      expect(respuesta).toBe(50);
    });

    it('Si envío 150 de daño debe retornar 0 de hp', () => {
      // const jugador = new Jugador();
      const respuesta = jugador.recibeDanio(150);
      expect(respuesta).toBe(0);
    });
  }
);
