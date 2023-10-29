import { Injectable } from '@nestjs/common';
import { Processo } from './entities/processo.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm/repository/Repository';
import { CriarProcessoInput } from './dto/criar-processo.input';

@Injectable()
export class ProcessosService {
  constructor(
    @InjectRepository(Processo)
    private processoRepository: Repository<Processo>,
  ) {}
  async listarTodos(): Promise<Processo[]> {
    return this.processoRepository.find(); //SELECT * processos
  }

  async criarProcesso(
    criarProcessInput: CriarProcessoInput,
  ): Promise<Processo> {
    const newProcess = this.processoRepository.create(criarProcessInput); //new process = new Process()   new.name = input.name

    return this.processoRepository.save(newProcess); // INSERT
  }

  async search(param: string): Promise<Processo> {
    try {
      // const result = await this.processoRepository.query(
      //   `SELECT * FROM Processo WHERE cnj = '${param}' OR tribunal_origem = '${param.toUpperCase()}'`,
      // );
      const result = await this.processoRepository.query(
        `SELECT * FROM Processo 
        WHERE cnj LIKE '%${param}%' OR tribunal_origem = '${param.toUpperCase()}'`,
      );
      console.log(result);
      const newArray = result.map((item) => {
        return {
          id: item.id,
          cnj: item.cnj,
          tribunal_origem: item.tribunal_origem,
          data_inicio: item.data_inicio,
          partes_processo: JSON.parse(item.partes_processo),
          movimentacoes: JSON.parse(item.movimentacoes),
        };
      });
      console.log(newArray);
      return newArray;
    } catch (e) {
      console.log({ message: e.message });
    }
  }
}
