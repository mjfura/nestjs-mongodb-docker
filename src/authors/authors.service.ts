import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Author, AuthorDocument } from './schemas/authors.schema';
import { Model } from 'mongoose';
import { AuthorDetailsResponseDto } from './dto/response-author-details.dto';
import { Book, BookDocument } from 'src/books/schemas/books.schema';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author.name)
    private readonly authorModel: Model<AuthorDocument>,
    @InjectModel(Book.name)
    private readonly bookModel: Model<BookDocument>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const lastAuthor = await this.authorModel.findOne().sort({ id: -1 });
    const nextId = lastAuthor ? lastAuthor.id + 1 : 1;
    const newAuthor = new this.authorModel({
      ...createAuthorDto,
      id: nextId,
    });

    return newAuthor.save();
  }

  async findAll(): Promise<AuthorDetailsResponseDto[]> {
    const authors = await this.authorModel.find();
    // Construir la respuesta incluyendo los libros
    const authorsWithBooks = await Promise.all(
      authors.map(async (author) => {
        // Obtener los libros correspondientes a los IDs en el autor
        const books = await this.bookModel.find({ id: { $in: author.books } });
        return {
          id: author.id,
          name: author.name,
          books: books.map((book) => ({
            id: book.id,
            title: book.title,
          })),
        };
      }),
    );

    return authorsWithBooks;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  // update(id: number, updateAuthorDto: UpdateAuthorDto) {
  //   return `This action updates a #${id} author`;
  // }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
