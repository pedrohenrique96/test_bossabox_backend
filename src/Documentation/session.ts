import { ApiProperty } from '@nestjs/swagger';

export class Session {
  @ApiProperty()
  email: 'exemplo@email.com';

  @ApiProperty()
  password: '123456';
}
