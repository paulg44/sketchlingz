export interface Category {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface CategoryContextType {
  categories: Category[];
  selectedCategory: Category | null;
  loading: boolean;
  error: string | null;
  selectCategory: (categoryId: string) => void;
  refreshCategories: () => Promise<void>;
}
