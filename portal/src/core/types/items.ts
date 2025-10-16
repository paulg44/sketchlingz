export interface Item {
  categoryId: string;
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
