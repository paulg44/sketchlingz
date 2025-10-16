/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Category, CategoryContextType } from '../types/categoryTypes';

const categoryContext = createContext<CategoryContextType | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const CategoryProvider = ({ children }: ProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, 'categories'));
      const fetchedCategories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Category[];
      setCategories(fetchedCategories);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch categories');
      setLoading(false);
    }
  };

  const selectCategory = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId) || null;
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const value: CategoryContextType = {
    categories,
    selectedCategory,
    loading,
    error,
    selectCategory,
    refreshCategories: fetchCategories,
  };

  return <categoryContext.Provider value={value}>{children}</categoryContext.Provider>;
};

export const useCategory = () => {
  const context = useContext(categoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};
