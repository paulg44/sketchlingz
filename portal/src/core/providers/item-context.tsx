/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Item, ItemContextType } from '../types/items';
import { useCategory } from './category-context';
import { getRandomItem } from '../helpers/random-item-helper';

const ItemContext = createContext<ItemContextType | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const ItemProvider = ({ children }: ProviderProps) => {
  const { selectedCategory } = useCategory();
  const [items, setItems] = useState<Item[]>([]);
  const [randomItem, setRandomItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = useCallback(
    async (categoryId: string) => {
      if (!selectedCategory) return;
      try {
        setLoading(true);
        const q = query(collection(db, 'items'), where('categoryId', '==', categoryId));
        const snapshot = await getDocs(q);
        const fetchedItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Item[];
        console.log('Fetched items:', fetchedItems);
        setItems(fetchedItems);
        const random = getRandomItem(fetchedItems);

        setRandomItem(random);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setError('Failed to fetch items');
        setLoading(false);
      }
    },
    [selectedCategory]
  );

  useEffect(() => {
    if (selectedCategory) {
      fetchItems(selectedCategory.id);
    }
  }, [selectedCategory, fetchItems]);

  const respinItem = () => {
    const random = getRandomItem(items);
    setRandomItem(random);
  };

  const value: ItemContextType = {
    items,
    randomItem,
    loading,
    error,
    respinItem,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export const useItem = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItem must be used within an ItemProvider');
  }
  return context;
};
