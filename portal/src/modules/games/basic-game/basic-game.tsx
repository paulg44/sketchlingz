import { Save } from 'lucide-react';
import { useCanvasContext } from '../../../core/providers/canvas-context';
import { useCategory } from '../../../core/providers/category-context';
import { useItem } from '../../../core/providers/item-context';
import Canvas from '../../../shared/canvas/canvas';
import CategorySelect from '../../../shared/category/category-select';
import RandomItemDisplay from '../../../shared/random-item-display/random-item-display';
import { useScoreContext } from '../../../core/providers/score-context';

const BasicGame = () => {
  const { randomItem } = useItem();
  const { selectedCategory } = useCategory();
  const { stageRef } = useCanvasContext();
  const score = useScoreContext();

  const handleSave = async () => {
    if (!stageRef.current || !randomItem || !score) return;
    const base64 = stageRef.current.toDataURL().split(',')[1];
    await score.handleCalculateScore(base64, randomItem.name);
  };

  return (
    <div>
      <h1>Basic Game!!</h1>
      {!selectedCategory ? (
        <CategorySelect />
      ) : (
        <div>
          <h2>Category: {selectedCategory.name}</h2>
          <div className='flex'>
            {randomItem && <RandomItemDisplay {...randomItem} imageUrl={randomItem?.imageUrl ?? ''} />}
            <Canvas />
          </div>
          <button
            onClick={handleSave}
            disabled={score?.isDisabled}
            className='ml-2 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <Save size={16} />
          </button>
          {score?.score && <span className='ml-4 font-semibold text-gray-700'>{score.score}</span>}
        </div>
      )}
    </div>
  );
};
export default BasicGame;
