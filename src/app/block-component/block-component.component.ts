import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-block-component',
  templateUrl: './block-component.component.html',
  styleUrls: ['./block-component.component.css']
})
export class BlockComponentComponent implements OnInit {

  @Output() asJson = new EventEmitter();
  @Output() asImage = new EventEmitter();

  @ViewChild('container', { static: true }) container; 

  gridBy = 6;

  @Input('json')
  grid: ISquare[] = [];

  constructor() {

    this.grid = new Array();

    for (let x = 0; x <= this.gridBy; x++) {
      for (let y = 0; y <= this.gridBy; y++) {
        this.grid.push({ x: x, y: 0, m: false });
      }
    }
  }

  mark(g: ISquare) {
    g.m = !g.m;

    this.asJson.emit(this.grid);

    setTimeout(() => this.outputImage(), 50);
  }

  protected outputImage(){
    domtoimage.toPng(this.container.nativeElement)
      .then((dataUrl) => {
        this.asImage.emit(dataUrl);
      })
      .catch((error) => console.error('oops, something went wrong!', error));
  }

  ngOnInit() {

  }
}

interface ISquare {
  x: number;
  y: number;
  m: boolean; // marked
}
