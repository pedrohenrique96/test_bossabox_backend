import { ApiProperty } from '@nestjs/swagger';

export class createTools {
  @ApiProperty()
  title: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  tags: [string];
}
