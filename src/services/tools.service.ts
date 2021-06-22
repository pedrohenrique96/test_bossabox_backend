import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tools } from '../models/Tools';
import { ToolsRepository } from '../Repositories/ToolsRepository';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: [];
}

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tools)
    private toolsRepository: ToolsRepository,
  ) {}

  async findAll(tag: string): Promise<Tools[]> {
    if (tag) {
      const tools = await this.toolsRepository.getFindQueryBuilder(tag);
      return tools;
    }

    const tools = await this.toolsRepository.find();
    return tools;
  }

  async create({ description, link, tags, title }: Request): Promise<Tools> {
    const tools = this.toolsRepository.create({
      description,
      link,
      tags,
      title,
    });

    await this.toolsRepository.save(tools);

    return tools;
  }

  async delete(id: number) {
    const tools = await this.toolsRepository.findOne({
      where: {
        id,
      },
    });

    if (!tools) {
      throw new HttpException('Tools is not exist', 400);
    }

    await this.toolsRepository.delete({ id: tools.id });
  }
}
