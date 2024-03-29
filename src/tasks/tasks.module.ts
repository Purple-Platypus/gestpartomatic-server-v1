import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksGateway } from './tasks.gateway';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { TagsService } from 'src/tags/tags.service';

@Module({
  imports: [UsersModule, AuthModule],
  providers: [TasksGateway, TasksService, TagsService, PrismaService],
})
export class TasksModule {}
