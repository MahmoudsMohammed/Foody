export interface Food {
  id: string;
  name: string;
  cookTime: string;
  price: number;
  favorite: boolean;
  origins: string[];
  stars: number;
  imageUrl: string;
  tags: string[];
}

export interface Tag {
  name: string;
  count: number;
}

export interface searchFields {
  search: string;
  tag: string;
}
