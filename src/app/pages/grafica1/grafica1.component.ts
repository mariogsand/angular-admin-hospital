import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = [ 'Ventas', 'Compras', 'Insumos' ];

  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 10000, 4050, 10200 ],
        backgroundColor:['#FE660E','#BB5B10','#FFB414'],
        borderColor:['brown'],
        hoverBackgroundColor: ['orange','red','yellow']
      },
    ]
  };

  constructor() { }

}
