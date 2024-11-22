import { AuthorEntity } from 'src/authors/entities/author.entity';

export class BookEntity {
  id: number;
  title: string;
  chapters: number;
  pages: number;
  authors: Pick<AuthorEntity, 'id' | 'name'>[];
}
