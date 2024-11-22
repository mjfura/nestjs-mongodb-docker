export class Book {
  id: number;
  title: string;
  chapters: number;
  pages: number;
  authors: { id: number; name: string }[];
}
