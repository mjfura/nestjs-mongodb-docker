import { ApiProperty } from '@nestjs/swagger';

export class AveragePagesChapterResponseDto {
  @ApiProperty({ description: 'ID del libro', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Promedio de páginas por capítulo',
    example: '30.00',
  })
  average: string;
}
