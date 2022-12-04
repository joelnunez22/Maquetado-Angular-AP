import { Component, OnInit} from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.scss']
})
export class AcercademiComponent implements OnInit{
  acercaDe:any;
  constructor(private datosPortfolio:PortfolioService) {}
  
  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data => {
    this.acercaDe=data;
  })
}
}
