export interface BlogItem {
  id: number;
  date: string;
  alias: string;
  title: string;
  author: {
    name: string;
    info: string;
  };
  intro: string;
}
