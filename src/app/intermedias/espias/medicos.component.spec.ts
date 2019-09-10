import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {Observable, of} from 'rxjs';
import { from } from 'rxjs';
import { EMPTY} from 'rxjs';


describe('MedicosComponent', () => {
  // Declaramos el componente y le asignamos el tipo
  let componente: MedicosComponent;
  // Antes de crearlo, como necesitamos inyectarle el servicio que incluye en el constructor,
  //  primero instanciamos el servicio
  const servicio = new MedicosService(null);
  // Adviértase que MédicosService también requeriría un servicio inyectado, concretamente HttpClient,
  // Pero aquí usamos otra técnica. Como las llamadas a http van a ser fake, lo dejamos como null.

  // Antes de cada prueba instanciamos el componente.
  beforeEach( () => {
    componente = new MedicosComponent(servicio);
  });

  it('Init debe cargar los médicos', () => {
    // En las pruebas, Angular no ejecuta automáticamente ngOnInit() así que hay que ejecutarlo manualmente.
    // Pero previamente, como se trata de pruebas unitarias, es decir, no queremos salir del componente,
    // hay que crear un servicio FAKE por medio de los espías, que estarán atentos a las llamadas al
    // servicio y suplantarán la respuesta de cada método. Es como decir, "espía al servicio y cuando llamen al método x, ejecuta
    // la función y. En este caso y, para imitar al servicio, devuelve un observable de tipo array, el cual generamos con from.
    spyOn(servicio, 'getMedicos').and.callFake(
      () => {
        return from(
          [
            ['medico1', 'medico2', 'medico3']
          ]
        );
      });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe llamar al servidor para agregar un médico', () => {
    // Preparamos el espía, que recibirá un médico y debe devolver un observable
    // Equivale al servicio. Para poder valorar si es invocado, lo asignamos a una
    // constante que usaremos en el expect.
    const nuevoMedico = { id: 1, nombre: 'Juan Prieto'};
    const servicioFake =  spyOn(servicio, 'agregarMedico').and.callFake(
      (medico) => {
        // Devolvemos un observable vacío porque nos da igual el resultado.
        // Lo que testeamos es si el método del servicio es llamado o no.
        return EMPTY;
      });
    componente.agregarMedico(nuevoMedico);
    // Se comprueba con el método toHaveBeenCalled()
    expect(servicioFake).toHaveBeenCalled();
  });

  it('Debe agregar un nuevo médico al array de médicos', () => {
    // Esta vez sí vamos a devolver un médico con el espía. Para ello no se usa
    // el método callFake sino el método .returnValue
    const medicoBD = { id: 1, nombre: 'Juan Prieto'};

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medicoBD]));

    componente.agregarMedico(medicoBD);
    // Se comprueba consultando si el item medicoBd está incluido en la propiedad medicos, de tipo array
    expect(componente.medicos.indexOf(medicoBD)).toBeGreaterThanOrEqual(0);
  });
});
