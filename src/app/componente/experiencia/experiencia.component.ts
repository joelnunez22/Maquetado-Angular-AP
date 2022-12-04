import { Component, OnInit } from '@angular/core';
import { PortfolioService} from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  experiencia:any;
  constructor(private datosPortfolio:PortfolioService) {}
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experiencia=data;
    });
    
    }
    }
