import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { ProcessosService } from './processos.service';
import { Processo } from './entities/processo.entity';
import { CriarProcessoInput } from './dto/criar-processo.input';

@Resolver(() => Processo)
export class ProcessosResolver {
  constructor(private readonly processosService: ProcessosService) {}
  // @Query(() => String)
  //     ListarProcessos() {
  //       return "Hello World"
  //     }

  @Query(() => [Processo])
  processos() {
    return this.processosService.listarTodos();
  }

  @Query(() => [Processo])
  async search(@Args('param', { type: () => String }) param: string) {
    return await this.processosService.search(param);
  }

  @Mutation(() => Processo)
  CriarProcesso(
    @Args('criarProcessoInput') criarProcessInput: CriarProcessoInput,
  ): Promise<Processo> {
    return this.processosService.criarProcesso(criarProcessInput);
  }
}
