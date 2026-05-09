/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { fetchItemsByCategory } from '../../services/item.service';
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
        const fetchedItems = await fetchItemsByCategory(categoryId);
        setItems(fetchedItems);
        setRandomItem(getRandomItem(fetchedItems));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching items:', err);
        setError('Failed to fetch items');
        setLoading(false);
      }
    },
    [selectedCategory],
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
