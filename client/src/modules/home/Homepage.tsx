import SharedButton from '../../shared/button/button';
import SharedCategoryCard from '../../shared/category-card/category-card';

const Homepage = () => {
  return (
    <div>
      <h1>Sketchlingz</h1>
      <div>
        <SharedCategoryCard />
      </div>
      <SharedButton appearance='link' />
    </div>
  );
};

export default Homepage;
