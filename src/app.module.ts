import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
console.log('Mongo DB URI ', process.env.MONGO_URI);
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''),
    BooksModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
