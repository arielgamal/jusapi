import { Module } from '@nestjs/common';
import { ProcessosService } from './processos.service';
import { ProcessosResolver } from './processos.resolver';
import { Processo } from './entities/processo.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [TypeOrmModule.forFeature([Processo])],
  providers: [ProcessosResolver, ProcessosService],
})
export class ProcessosModule {}
