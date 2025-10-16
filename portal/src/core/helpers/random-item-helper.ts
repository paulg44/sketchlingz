import type { Item } from '../types/items';

export const getRandomItem = (items: Item[]): Item | null => {
  if (items.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};
