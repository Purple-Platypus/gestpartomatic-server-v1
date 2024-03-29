import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  controllers: [TodosController],
  exports: [TodosService],
  providers: [TodosService, PrismaService],
})
export class TodosModule {}
