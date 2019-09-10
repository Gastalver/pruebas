import { FormularioLogIn} from './formulario';
import { FormBuilder} from '@angular/forms';

describe('Formularios', () => {
  let componente: FormularioLogIn;
  beforeEach(() => {
    // Creamos un objeto de la clase FormularioLogin. Pero es necesario que como parámetro del new se
    // meta el servicio que la clase original tiene inyectado en su constructor.
    // Esto hay que hacerlo así en general cada vez que importemos un objeto que en su constructor tenga
    // inyectados servicios ¿del framework?.
    componente = new FormularioLogIn( new FormBuilder());
  });
  it('Debe crear un formulario con dos campos: email y password', () => {
    // Como la propiedad de naturaleza formControl y sus campos los crea en el constructor,
    // no tenemos que provocar la prueba, ya que ya hemos definido el objeto, y lo instanciamos
    // con beforeEach. Así que vamos directamente a la comprobación:
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();

  });
  it('El email debe ser obligatorio', () => {
    // De esta forma obtenemos el objeto campo de formulario y acceso a todas sus propiedades
    const control = componente.form.get('email');
    // Le damos un valor de string vacío, lo cual debería dar lugar a que la propiedad valid fuera false.
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('El email debe ser un correo válido', () => {
    const control = componente.form.get('email');
    // Le damos un valor que no sea un email lo cual debería dar lugar a que la propiedad valid fuera false.
    control.setValue('miguel@gmail.com');
    expect(control.valid).toBeTruthy();
  });
});
