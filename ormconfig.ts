import { ConnectionOptions } from 'typeorm';
import { User } from './src/models/User';
import { Tools } from './src/models/Tools';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'bossabox',
  entities: [User, Tools],
  migrations: ['src/database/migration/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migration',
  },
  synchronize: true,
  logging: true,
};

export = config;
