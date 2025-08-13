import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../formulario/formulario";
import { Resultado } from "../resultado/resultado";

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, Formulario, Resultado],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {

  resultadoPadre: number = 0;

  procesarResultado(resultadoHijo: number) {
    this.resultadoPadre = resultadoHijo;
  }
}
