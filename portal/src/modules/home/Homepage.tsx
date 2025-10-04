import SharedButton from '../../shared/button/button';
import SharedCard from '../../shared/card/card';

const Homepage = () => {
  return (
    <div>
      <h1>Sketchlingz</h1>
      <div className='flex gap-4'>
        <SharedCard title='test card' extra={<SharedButton appearance='link' />}>
          <p>Test Card</p>
        </SharedCard>
      </div>
    </div>
  );
};

export default Homepage;
