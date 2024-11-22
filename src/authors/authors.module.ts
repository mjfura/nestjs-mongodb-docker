import { forwardRef, Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './schemas/authors.schema';
import { BooksModule } from 'src/books/books.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
    forwardRef(() => BooksModule),
  ],
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [MongooseModule],
})
export class AuthorsModule {}
