export interface Article {
  id: number;
  date: string;
  alias: string;
  title: string;
  author: {
    name: string;
    info: string;
  };
  intro: string;
  content: string;
}
