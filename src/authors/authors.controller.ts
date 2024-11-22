import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { ApiResponse } from '@nestjs/swagger';
import { AuthorResponseDto } from './dto/response-author.dto';
import { AuthorDetailsResponseDto } from './dto/response-author-details.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Autor creado exitosamente',
    type: AuthorResponseDto,
  })
  async create(
    @Body() createAuthorDto: CreateAuthorDto,
  ): Promise<AuthorResponseDto> {
    const newAuthor = await this.authorsService.create(createAuthorDto);
    return {
      id: newAuthor.id,
      name: newAuthor.name,
    };
  }

  @Get()
  async findAll(): Promise<AuthorDetailsResponseDto[]> {
    return this.authorsService.findAll();
  }
}
