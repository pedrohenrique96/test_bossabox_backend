import {
  Controller,
  HttpStatus,
  Post,
  Req,
  Res,
  Get,
  Delete,
  Param,
  Query,
} from '@nestjs/common';

import { ApiBody, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { createTools } from '../Documentation/createTools';
import { ToolsService } from '../services/tools.service';

@Controller('tools')
export class ToolsController {
  constructor(private toolsService: ToolsService) {}

  @Get()
  @ApiQuery({
    name: 'tag',
    required: false,
  })
  async show(
    @Query('tag') tag: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const tools = await this.toolsService.findAll(tag);
    return res.status(HttpStatus.OK).json(tools);
  }

  @Post()
  @ApiBody({
    type: createTools,
    required: true,
  })
  @ApiResponse({
    status: 201,
  })
  async store(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { description, link, tags, title } = req.body;

    const tools = await this.toolsService.create({
      description,
      link,
      tags,
      title,
    });

    return res.status(HttpStatus.CREATED).json(tools);
  }

  @Delete(':id')
  @ApiResponse({
    status: 204,
  })
  async delete(
    @Param('id') id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.toolsService.delete(id);
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
