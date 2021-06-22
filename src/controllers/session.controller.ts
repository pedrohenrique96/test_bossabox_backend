import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { SessionService } from '../services/session.service';
import { Session } from '../Documentation/session';

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @Post()
  @ApiBody({
    type: Session,
    required: true,
  })
  @ApiResponse({
    status: 200,
  })
  async store(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { email, password } = req.body;
    const session = await this.sessionService.execute({ email, password });
    return res.status(HttpStatus.OK).json(session);
  }
}
