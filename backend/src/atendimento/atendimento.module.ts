import { Module } from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';
import { AtendimentoController } from './atendimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atendimento } from './atendimento.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Atendimento]),
  ],
  providers: [AtendimentoService],
  controllers: [AtendimentoController]
})
export class AtendimentoModule {}
