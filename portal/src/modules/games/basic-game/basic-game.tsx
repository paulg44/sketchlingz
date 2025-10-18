import { useCategory } from '../../../core/providers/category-context';
import { useItem } from '../../../core/providers/item-context';
import SharedButton from '../../../shared/button/button';
import Canvas from '../../../shared/canvas/canvas';
import RandomItemDisplay from '../../../shared/random-item-display/random-item-display';

const BasicGame = () => {
  const { randomItem, respinItem } = useItem();
  const { selectedCategory } = useCategory();

  if (!selectedCategory) {
    return <div>Please select a category to start the game.</div>;
  }

  return (
    <div>
      <div>
        <h2>Category: {selectedCategory.name}</h2>
        {randomItem && <RandomItemDisplay {...randomItem} imageUrl={randomItem?.imageUrl ?? ''} />}{' '}
        <SharedButton labelKey='Respin Item' onClick={respinItem} appearance='primary' />
      </div>
      <h2>Basic Game!</h2>
      <Canvas />
    </div>
  );
};
export default BasicGame;
