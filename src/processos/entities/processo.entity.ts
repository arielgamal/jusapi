import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
class PartesOutput {
  @Column('json')
  @Field()
  nome: string;

  @Column('json')
  @Field()
  posicao: string;
}

@ObjectType()
class MovimentacoesOutput {
  @Column('json')
  @Field()
  descricao: string;

  @Column('json')
  @Field()
  data: string;
}

@Entity()
@ObjectType()
export class Processo {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  cnj: string;

  @Column()
  @Field()
  tribunal_origem: string;

  @Column()
  @Field()
  data_inicio: string;

  @Column('json')
  @Field(() => [PartesOutput])
  partes_processo: PartesOutput[];

  @Column('json')
  @Field(() => [MovimentacoesOutput])
  movimentacoes: MovimentacoesOutput[];
}
