import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionController } from './controllers/session.controller';
import { ToolsController } from './controllers/tools.controller';
import { UserController } from './controllers/user.controller';
import { CreateUserService } from './services/create-user.service';
import { SessionService } from './services/session.service';
import { ToolsService } from './services/tools.service';
import { UserRepository } from './Repositories/UserRepository';
import { ToolsRepository } from './Repositories/ToolsRepository';
import * as ormconfig from '../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([UserRepository, ToolsRepository]),
  ],
  controllers: [SessionController, ToolsController, UserController],
  providers: [CreateUserService, SessionService, ToolsService],
})
export class AppModule {}
