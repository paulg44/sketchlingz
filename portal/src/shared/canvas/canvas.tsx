import CanvasStage from './canvas-stage';
import CanvasToolbar from './canvas-toolbar';

const Canvas = () => {
  return (
    <div className='relative p-4'>
      <CanvasStage />
      <div className='flex justify-end'>
        <CanvasToolbar />
      </div>
    </div>
  );
};

export default Canvas;
