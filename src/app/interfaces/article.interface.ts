import { AuthorInfo } from "./author-info.interface";

export interface Article {
  id: number;
  date: string;
  title: string;
  author: AuthorInfo;
  intro: string;
  content: string;
}
