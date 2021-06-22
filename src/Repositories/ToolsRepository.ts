import { Repository, EntityRepository, getRepository } from 'typeorm';
import { Tools } from '../models/Tools';

@EntityRepository(Tools)
export class ToolsRepository extends Repository<Tools> {
  async getFindQueryBuilder(tag: string) {
    const tools = await getRepository(Tools)
      .createQueryBuilder('tools')
      .where('tools.tags @> ARRAY[:...tags]', { tags: [tag] })
      .getMany();

    return tools;
  }
}
