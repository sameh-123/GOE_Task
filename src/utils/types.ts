import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type Relevant = {
  id: string;
  location: string;
  hotel: string;
  price: number;
  rate: number;
  reviews: number;
  image: string | StaticImport;
  isLiked?: boolean;
};

export type Discover = {
  id: string;
  location: string;
  image: string | StaticImport;
};

export type Trend = {
  id: string;
  location: string;
  description: string;
  image: string | StaticImport;
  color: string;
};
