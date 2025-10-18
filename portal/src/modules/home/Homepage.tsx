import SharedButton from '../../shared/button/button';
import SharedCard from '../../shared/card/card';
import { useCategory } from '../../core/providers/category-context';
import { useItem } from '../../core/providers/item-context';
import RandomItemDisplay from '../../shared/random-item-display/random-item-display';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const { categories, selectedCategory, selectCategory } = useCategory();
  const { randomItem, respinItem } = useItem();
  const categorySelected = selectedCategory ? `Selected Category: ${selectedCategory.name}` : 'No category selected';

  const startBasicGame = () => {
    selectCategory(selectedCategory?.id || '');
    navigate('basic-game');
  };

  // Add icons for title or button?
  return (
    <div>
      <h1>Sketchlingz</h1>
      <div className='flex flex-col gap-4'>
        {categories.map((category, index) => (
          <SharedCard key={index} title={category.id}>
            {
              <SharedButton
                labelKey={category?.name}
                onClick={() => selectCategory(category.id)}
                appearance='primary'
              />
            }
          </SharedCard>
        ))}
        <div>
          <h2>{categorySelected}</h2>
          {randomItem && <RandomItemDisplay {...randomItem} imageUrl={randomItem.imageUrl ?? ''} />}
        </div>
        <SharedButton labelKey='Respin Item' onClick={respinItem} appearance='primary' />
      </div>
      <div>
        <h2>Go to basic game</h2>
        <SharedButton labelKey='Play Basic Game' onClick={() => startBasicGame()} appearance='primary' />
      </div>
    </div>
  );
};

export default Homepage;
