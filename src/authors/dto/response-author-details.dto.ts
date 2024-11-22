import { ApiProperty } from '@nestjs/swagger';

export class AuthorDetailsResponseDto {
  @ApiProperty({ description: 'ID del autor', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Nombre del autor',
    example: 'Gabriel García Márquez',
  })
  name: string;

  @ApiProperty({
    description: 'Libros',
    example: [{ id: 1, title: 'Cien años de soledad' }],
  })
  books: { id: number; title: string }[];
}
