import CanvasStage from './canvas-stage';
import CanvasToolbar from './canvas-toolbar';

const Canvas = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <CanvasToolbar />
      <CanvasStage />
    </div>
  );
};

export default Canvas;
