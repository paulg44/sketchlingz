import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../core/config/firebase';
import type { Item } from '../core/types/items';

export const fetchItemsByCategory = async (categoryId: string): Promise<Item[]> => {
  const q = query(collection(db, 'items'), where('categoryId', '==', categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Item[];
};
