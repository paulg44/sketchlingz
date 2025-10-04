import SharedButton from '../../shared/button/button';
import SharedCard from '../../shared/card/card';
import categories from '../../core/data/kids-categories.json';

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
    </div>
  );
};

export default Homepage;
