import { ApiProperty } from '@nestjs/swagger';

export class BookResponseDto {
  @ApiProperty({ description: 'ID del libro', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Título del libro',
    example: 'Don Quijote de la Mancha',
  })
  title: string;

  @ApiProperty({
    description: 'Número de capítulos',
    example: 12,
  })
  chapters: number;

  @ApiProperty({
    description: 'Número de páginas',
    example: 300,
  })
  pages: number;

  @ApiProperty({
    description: 'Autores del libro',
    example: [{ id: 1, name: 'Miguel de Cervantes' }],
  })
  authors: { id: number; name: string }[];
}
