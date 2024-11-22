import { ApiProperty } from '@nestjs/swagger';

export class AuthorResponseDto {
  @ApiProperty({ description: 'ID del autor', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Nombre del autor',
    example: 'Gabriel García Márquez',
  })
  name: string;
}
