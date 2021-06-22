import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateUserService } from '../services/create-user.service';
import { User } from '../Documentation/user';

@Controller('user')
export class UserController {
  constructor(private createUserService: CreateUserService) {}

  @Post()
  @ApiBody({ type: User })
  @ApiResponse({
    status: 201,
  })
  async store(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const { email, password } = req.body;

    const user = await this.createUserService.execute({
      email,
      password,
    });

    return res.status(HttpStatus.CREATED).json(user);
  }
}
