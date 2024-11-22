import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  chapters: number;

  @Prop({ required: true })
  pages: number;

  @Prop({ type: [{ id: Number, name: String }], default: [], required: true })
  authors: { id: number; name: string }[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
