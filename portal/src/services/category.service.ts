import { collection, getDocs } from 'firebase/firestore';
import { db } from '../core/config/firebase';
import type { Category } from '../core/types/categoryTypes';

export const fetchCategories = async (): Promise<Category[]> => {
  console.log('[category.service] project:', db.app.options.projectId);
  const snapshot = await getDocs(collection(db, 'categories'));
  const categories = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Category[];
  console.log('[category.service] fetched:', categories);
  return categories;
};
