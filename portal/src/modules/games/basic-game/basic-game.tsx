import { useCategory } from '../../../core/providers/category-context';
import { useItem } from '../../../core/providers/item-context';
import Canvas from '../../../shared/canvas/canvas';
import RandomItemDisplay from '../../../shared/random-item-display/random-item-display';

const BasicGame = () => {
  const { randomItem } = useItem();
  const { selectedCategory } = useCategory();

  if (!selectedCategory) {
    return <div>Please select a category to start the game.</div>;
  }

  return (
    <div>
      <div>
        <h1>Basic Game!</h1>
        <h2>Category: {selectedCategory.name}</h2>
        <div className='flex'>
          {randomItem && <RandomItemDisplay {...randomItem} imageUrl={randomItem?.imageUrl ?? ''} />} <Canvas />
        </div>
      </div>
    </div>
  );
};
export default BasicGame;
