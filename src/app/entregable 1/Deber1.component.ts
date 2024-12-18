import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-Deber1',
  standalone: true,
  imports: [CommonModule, ButtonModule ],
  templateUrl: './Deber1.component.html',
  styleUrl: './Deber1.component.scss'
})
export class Deber1Component {
  matriz: number[][] = [];
  cellSize: number = 50;
  cellColor: string = '#0000ff';

  generateMatriz(size:number):void {
    this.matriz = Array.from({ length: size}, ()=> Array(size).fill(0))
  }
}
