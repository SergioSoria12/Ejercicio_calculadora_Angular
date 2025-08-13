import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  operandoA: number | null = null;
  operandoB: number | null = null;

  @Output() resultadoSuma = new EventEmitter<number>();
  @Output() resultadoResta = new EventEmitter<number>();
  @Output() resultadoMultiplicacion = new EventEmitter<number>();
  @Output() resultadoDivision = new EventEmitter<number>();

  sumar() {
    if(this.operandoA && this.operandoB){
      const resultado = this.operandoA + this.operandoB;
      this.resultadoSuma.emit(resultado);
    }else{
      console.log('Debe introducir los datos correctos')
    }
  }
  restar() {
    if(this.operandoA && this.operandoB){
      const resultado = this.operandoA - this.operandoB;
      this.resultadoResta.emit(resultado);
    }else{
      console.log('Debe introducir los datos correctos')
    }
  }
  multiplicar() {
     if(this.operandoA && this.operandoB){
      const resultado = this.operandoA * this.operandoB;
      this.resultadoMultiplicacion.emit(resultado);
    }else{
      console.log('Debe introducir los datos correctos')
    }
  }
  dividir() {
     if(this.operandoA && this.operandoB){
      const resultado = this.operandoA / this.operandoB;
      this.resultadoDivision.emit(resultado);
    }else{
      console.log('Debe introducir los datos correctos')
    }
  }

}
