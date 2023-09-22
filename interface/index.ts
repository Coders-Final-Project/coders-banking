export interface IBlogCard {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
  authorImage: string;
  authorName: string;
  estimatedTime: string;
  role: string;
}

export interface IBlogTrending {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
}

export interface IIntegrationCard {
  id: number;
  category: string;
  title: string;
  desc: string;
  imgUrl: string;
}
