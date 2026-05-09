import { useCategory } from '../../core/providers/category-context';
import SharedButton from '../button/button';
import SharedCard from '../card/card';

const CategorySelect = () => {
  const { categories, selectedCategory, selectCategory } = useCategory();

  return (
    <>
      {categories.map((category, index) => (
        <SharedCard key={index} title={category.id}>
          <SharedButton
            className='w-[100px]'
            labelKey={category?.name}
            onClick={() => selectCategory(category.id)}
            appearance='primary'
          />
        </SharedCard>
      ))}
      {selectedCategory && <h2>Selected: {selectedCategory.name}</h2>}
    </>
  );
};

export default CategorySelect;
