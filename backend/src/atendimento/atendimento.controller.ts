import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';
import { Atendimento } from './atendimento.entity';

@Controller('atendimento')
export class AtendimentoController {

  constructor(private service: AtendimentoService) { }

  @Post()
  async create(@Body('description') descricao: string,
              @Body('assunto') assunto: string,
              @Body('coordenador') coordenador: string,
              @Body('data') data: string,
  ) {
    return await this.service.save(coordenador, assunto , descricao, data);
  }

  @Get()
  async listAllAtendimentos() {
    return await this.service.findAll();
  }

  @Put()
  async updateAtendimento(@Body() atendimento: Atendimento) {
    return await this.service.update(atendimento);
  }

  @Delete(':id')
  async removeAtendimento(@Param('id') id: number) {
    return await this.service.remove(id);
  }

}
