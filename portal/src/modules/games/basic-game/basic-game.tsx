import { useCategory } from '../../../core/providers/category-context';
import { useItem } from '../../../core/providers/item-context';
import Canvas from '../../../shared/canvas/canvas';
import CategorySelect from '../../../shared/category/category-select';
import RandomItemDisplay from '../../../shared/random-item-display/random-item-display';

const BasicGame = () => {
  const { randomItem } = useItem();
  const { selectedCategory } = useCategory();

  return (
    <div>
      <h1>Basic Game!</h1>
      {!selectedCategory ? (
        <CategorySelect />
      ) : (
        <div>
          <h2>Category: {selectedCategory.name}</h2>
          <div className='flex'>
            {randomItem && <RandomItemDisplay {...randomItem} imageUrl={randomItem?.imageUrl ?? ''} />}
            <Canvas />
          </div>
        </div>
      )}
    </div>
  );
};
export default BasicGame;
