import Canvas from '../../../shared/canvas/canvas';
import RandomItemDisplay from '../../../shared/random-item-display/random-item-display';

const BasicGame = () => {
  return (
    <div>
      <RandomItemDisplay
        name='test'
        imageUrl='https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
      />
      <h2>Basic Game!</h2>
      <Canvas />
    </div>
  );
};
export default BasicGame;
