import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {

    constructor(coord : string, assunto : string, desc: string, data : string) {

        this.coordenador = coord;
        this.assunto = assunto;
        this.descricao = desc;
        this.data = data

    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column({ default: false })
    done: boolean

    @Column()
    coordenador: string;

    @Column()
    assunto: string;

    @Column()
    data: string;

}
