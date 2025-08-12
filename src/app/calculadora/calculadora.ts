import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {

  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  sumar() {
    return this.resultado = this.operandoA + this.operandoB; 
  }
  restar() {
    return this.resultado = this.operandoA - this.operandoB; 
  }
  multiplicar() {
    return this.resultado = this.operandoA * this.operandoB; 
  }
  dividir() {
    return this.resultado = this.operandoA / this.operandoB; 
  }
}
