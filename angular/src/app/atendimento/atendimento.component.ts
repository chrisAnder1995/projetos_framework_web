import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from './atendimento.service';
import { Atendimento } from './atendimento.model';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {

  constructor(private service: AtendimentoService) { this.findAll(); }

  atendimentos: Atendimento[];
  atendimento: Atendimento = new Atendimento();
  description: string;
  
  coordenador: string;
  assunto: string;
  descricao: string;
  data: string;

  ngOnInit(): void { }

  findAll(): void {
    this.service.findAll()
      .subscribe(data => {
        this.atendimentos = data;
        this.description = '';
      });
  }

  done(atendimento: Atendimento) {
    atendimento.done = true;
    this.update(atendimento);
  }

  update(atendimento: Atendimento) {
    this.service.update(atendimento)
      .subscribe(_ => { this.findAll(), this.atendimento = new Atendimento() });
  }

  create() {
      this.service.create(this.atendimento.coordenador, this.atendimento.assunto , this.atendimento.descricao, this.atendimento.data)
        .subscribe(_ => { this.findAll(), this.atendimento = new Atendimento() });
  }

  remove(id: number) {
    this.service.delete(id)
      .subscribe(_ => this.findAll());
  }

  prepareUpdate(atendimento: Atendimento) {
    this.atendimento = atendimento;
  }


}
