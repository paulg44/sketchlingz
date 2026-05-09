import { useCategory } from '../../core/providers/category-context';
import { useItem } from '../../core/providers/item-context';
import SharedButton from '../button/button';
import SharedCard from '../card/card';
import RandomItemDisplay from '../random-item-display/random-item-display';

const CategorySelect = () => {
  const { categories, selectedCategory, selectCategory } = useCategory();
  const categorySelected = selectedCategory ? `Selected Category: ${selectedCategory.name}` : 'No category selected';
  const { randomItem, respinItem } = useItem();
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
      <h2>{categorySelected}</h2>
      {randomItem && <RandomItemDisplay {...randomItem} imageUrl={randomItem.imageUrl ?? ''} />}
      <SharedButton labelKey='Respin Item' onClick={respinItem} appearance='primary' />
    </>
  );
};

export default CategorySelect;
