import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
 
  }
  ngOnInit(): void {
   
  }
   cadastrar(){
     window.location.href ="/clientes"  
    alert('Você será redirecionado');
  }

}

