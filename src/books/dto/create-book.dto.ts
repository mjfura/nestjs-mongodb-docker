import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: 'Título del libro',
    example: 'Don Quijote de la Mancha',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Número de capítulos',
    example: 12,
  })
  @IsNumber()
  @IsNotEmpty()
  chapters: number;

  @ApiProperty({
    description: 'Número de páginas',
    example: 300,
  })
  @IsNumber()
  @IsNotEmpty()
  pages: number;

  @ApiProperty({
    description: 'Autores del libro',
    example: [1, 2],
  })
  @IsArray()
  @IsNumber({}, { each: true })
  authorIds: number[];
}
