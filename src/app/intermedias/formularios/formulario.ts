import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export class FormularioLogIn {

  form: FormGroup;
  // Para poder crear un formulario hay que inyectar el servicio FormBuilder, de @angular
  constructor(
    fb: FormBuilder
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


}
