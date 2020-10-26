import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
 
  public listElement = document.querySelector('#frmCadastro ul');
  public inputElement = document.querySelector('#frmCadastro input');
  public buttonElement = document.querySelector('#frmCadastro btnSalvar');



  constructor() { }

  ngOnInit(): void {
  }


  saveToStorage(){

  }
}
