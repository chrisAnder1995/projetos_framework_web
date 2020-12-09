import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Atendimento } from './atendimento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AtendimentoService {

    constructor(
        @InjectRepository(Atendimento)
        private repository: Repository<Atendimento>,
    ) { }

    async findAll(): Promise<Atendimento[]> {
        return await this.repository.find({ order: { id: "DESC" } });
    }

    async findOne(id: string): Promise<Atendimento> {
        return await this.repository.findOne(id);
    }

    async save( coordenador : string, assunto : string, descricao: string,  data : string, ): Promise<Atendimento> {
        return await this.repository.save(new Atendimento(coordenador, assunto , descricao, data));
    }

    async update(atendimento: Atendimento): Promise<any> {
        atendimento.done = atendimento.done + '' == 'true';
        return await this.repository.update(atendimento.id, atendimento);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }

}
