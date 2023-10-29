import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CriarProcessoInput {
  @Field()
  cnj: string;

  @Field()
  tribunal_origem: string;

  @Field()
  data_inicio: string;

  @Field(() => [partesInput])
  partes_processo: partesInput[];

  @Field(() => [movimentacoesInput])
  movimentacoes: movimentacoesInput[];
}

@InputType()
class partesInput {
  @Field()
  nome: string;

  @Field()
  posicao: string;
}

@InputType()
class movimentacoesInput {
  @Field()
  descricao: string;

  @Field()
  data: string;
}
