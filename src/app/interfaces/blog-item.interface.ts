import { AuthorInfo } from "./author-info.interface";

export interface BlogItem {
  id: number;
  date: string;
  title: string;
  author: AuthorInfo;
  intro: string;
}
