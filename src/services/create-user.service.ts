import { Injectable, HttpException } from '@nestjs/common';
import { hash } from 'bcryptjs';
import * as yup from 'yup';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/User';
import { UserRepository } from '../Repositories/UserRepository';

interface Request {
  email: string;
  password: string;
}

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: UserRepository,
  ) {}

  async execute({ email, password }: Request): Promise<User> {
    const schema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid({ password, email }))) {
      throw new HttpException('Validation fails', 400);
    }

    const checkUserExists = await this.usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new HttpException('Email address already used', 400);
    }

    const password_hash = await hash(password, 10);

    const user = this.usersRepository.create({
      email,
      password: password_hash,
    });

    await this.usersRepository.save(user);

    delete user.password;

    return user;
  }
}
