import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookResponseDto } from './dto/response-book.dto';
import { AveragePagesChapterResponseDto } from './dto/response-average-pages.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Libro creado exitosamente',
    type: BookResponseDto,
  })
  async create(@Body() createBookDto: CreateBookDto): Promise<BookResponseDto> {
    const book = await this.booksService.create(createBookDto);
    return {
      id: book.id,
      title: book.title,
      authors: book.authors.map((author) => ({
        id: author.id,
        name: author.name,
      })),
      pages: book.pages,
      chapters: book.chapters,
    };
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Lista de libros',
    type: [BookResponseDto],
  })
  async findAll(): Promise<BookResponseDto[]> {
    return this.booksService.findAll();
  }

  @Get('average-pages-chapter')
  @ApiResponse({
    status: 201,
    description: 'Promedio de páginas por capítulo de los libros',
    type: [AveragePagesChapterResponseDto],
  })
  async getAveragePagesForChapter(): Promise<AveragePagesChapterResponseDto[]> {
    return this.booksService.getAveragePagesByChapter();
  }
}
