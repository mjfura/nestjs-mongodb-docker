import { forwardRef, Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/books.schema';
import { AuthorsModule } from 'src/authors/authors.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    forwardRef(() => AuthorsModule),
  ],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [MongooseModule],
})
export class BooksModule {}
