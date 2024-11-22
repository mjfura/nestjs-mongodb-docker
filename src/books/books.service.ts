import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/books.schema';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from 'src/authors/schemas/authors.schema';
import { AveragePagesChapterResponseDto } from './dto/response-average-pages.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<BookDocument>,
    @InjectModel(Author.name)
    private readonly authorModel: Model<AuthorDocument>,
  ) {}
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const authorIds = createBookDto.authorIds;
    const authors = await this.authorModel.find({ id: { $in: authorIds } });
    if (authorIds.length !== authors.length) {
      throw new Error('Algunos autores no existen');
    }
    const lastBook = await this.bookModel.findOne().sort({ id: -1 });
    const nextId = lastBook ? lastBook.id + 1 : 1;
    const newBook = new this.bookModel({
      ...createBookDto,
      id: nextId,
      authors: authors.map((author) => ({
        id: author.id,
        name: author.name,
      })),
    });
    const book = await newBook.save();
    await this.authorModel.updateMany(
      { id: { $in: authorIds } },
      { $addToSet: { books: book.id } },
    );
    return book;
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
  async getAveragePagesByChapter(): Promise<AveragePagesChapterResponseDto[]> {
    const books = await this.bookModel.find();
    const averagePagesByChapter = books.map((book) => {
      const averagePages = (book.pages / book.chapters).toFixed(2);
      return {
        id: book.id,
        average: averagePages,
      };
    });
    return averagePagesByChapter;
  }
  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
