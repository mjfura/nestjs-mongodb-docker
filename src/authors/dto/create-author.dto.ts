import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({
    description: 'Nombre del autor',
    example: 'Gabriel García Márquez',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
