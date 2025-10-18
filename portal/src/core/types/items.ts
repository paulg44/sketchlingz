export interface Item {
  categoryId: string;
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ItemContextType {
  items: Item[];
  randomItem: Item | null;
  loading: boolean;
  error: string | null;
  respinItem: () => void;
}
