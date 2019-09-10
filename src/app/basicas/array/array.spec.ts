import { obtenerRobots} from './array';

// Ejemplo de como desactivar temporalmente las pruebas. Colocar una x delante de describe o de it.
xdescribe('Pruebas de arrays', () => {
  // Comprobar que el array tiene un mínimo de elementos
  it ('Debe devolver un array con tres items', () => {
    const resultado = obtenerRobots();
    expect(resultado.length).toBeGreaterThanOrEqual(3);
  });
  // Comprobar que el array contiene ciertos items.
  it ('Debe contener items llamados Megaman y Ultrón', () => {
    const resultado = obtenerRobots();
    expect(resultado).toContain('Megaman');
    expect(resultado).toContain('Ultron');
  });

});
