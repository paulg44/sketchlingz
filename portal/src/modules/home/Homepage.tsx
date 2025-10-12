import SharedButton from '../../shared/button/button';
import SharedCard from '../../shared/card/card';
import categories from '../../core/data/kids-categories.json';
import { CanvasProvider } from '../../core/providers/canvas-context';
import Canvas from '../../shared/canvas/canvas';

const Homepage = () => {
  const categoriesList = Object.keys(categories.kidsCategories);

  // Add icons for title or button?
  return (
    <div>
      <h1>Sketchlingz</h1>
      <div className='flex gap-4'>
        {categoriesList.map((category, index) => (
          <SharedCard key={index} title={category}>
            {<SharedButton labelKey={category} appearance='link' />}
          </SharedCard>
        ))}
      </div>
      {/* Canvas for testing purposes */}
      <CanvasProvider>
        <Canvas />
      </CanvasProvider>
    </div>
  );
};

export default Homepage;
