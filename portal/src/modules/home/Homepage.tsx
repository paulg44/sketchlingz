import SharedButton from '../../shared/button/button';
import SharedCard from '../../shared/card/card';
import { CanvasProvider } from '../../core/providers/canvas-context';
import Canvas from '../../shared/canvas/canvas';
import { useCategory } from '../../core/providers/category-context';
import { useItem } from '../../core/providers/item-context';

const Homepage = () => {
  const { categories, selectedCategory, selectCategory } = useCategory();
  const { randomItem, respinItem } = useItem();
  const categorySelected = selectedCategory ? `Selected Category: ${selectedCategory.name}` : 'No category selected';

  // Add icons for title or button?
  return (
    <div>
      <h1>Sketchlingz</h1>
      <div className='flex gap-4'>
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
          {randomItem && (
            <SharedCard title={randomItem.name}>
              <img src={randomItem.imageUrl} alt={randomItem.name} />
            </SharedCard>
          )}
        </div>
        <SharedButton labelKey='Respin Item' onClick={respinItem} appearance='primary' />
      </div>
      {/* Canvas for testing purposes */}
      <CanvasProvider>
        <Canvas />
      </CanvasProvider>
    </div>
  );
};

export default Homepage;
