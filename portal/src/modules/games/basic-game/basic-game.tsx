import { RefreshCcw, Save } from 'lucide-react';
import { useCanvasContext } from '../../../core/providers/canvas-context';
import { useCategory } from '../../../core/providers/category-context';
import { useItem } from '../../../core/providers/item-context';
import Canvas from '../../../shared/canvas/canvas';
import CategorySelect from '../../../shared/category/category-select';
import RandomItemDisplay from '../../../shared/random-item-display/random-item-display';
import { useScoreContext } from '../../../core/providers/score-context';
import SharedButton from '../../../shared/button/button';

const BasicGame = () => {
  const { randomItem } = useItem();
  const { selectedCategory } = useCategory();
  const { stageRef } = useCanvasContext();
  const score = useScoreContext();
  const { respinItem } = useItem();

  const handleSave = async () => {
    if (!stageRef.current || !randomItem || !score) return;
    const base64 = stageRef.current.toDataURL().split(',')[1];
    await score.handleCalculateScore(base64, randomItem.name);
  };

  return (
    <div>
      {!selectedCategory ? (
        <CategorySelect />
      ) : (
        <div>
          <div className='flex content-center items-center justify-center'>
            {randomItem && <RandomItemDisplay {...randomItem} imageUrl={randomItem?.imageUrl ?? ''} />}
            <Canvas />
          </div>
          <div className='m-4 p-4 border-t border-gray-300 flex items-center justify-start'>
            <SharedButton
              labelKey='Respin Item'
              onClick={respinItem}
              appearance='primary'
              className='m-4'
              icon={<RefreshCcw size={16} />}
            />
            <SharedButton
              labelKey='Save Drawing'
              onClick={handleSave}
              disabled={score?.isDisabled}
              icon={<Save size={16} />}
              appearance='primary'
              className='ml-2 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
            />
            {score?.score && <span className='ml-4 font-semibold text-gray-700'>{score.score}</span>}
          </div>
        </div>
      )}
    </div>
  );
};
export default BasicGame;
