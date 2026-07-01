import CanvasStage from './canvas-stage';
import CanvasToolbar from './canvas-toolbar';

const Canvas = () => {
  return (
    <div className='w-auto h-full relative m-4 flex flex-col items-center justify-center'>
      <CanvasStage />
      <div className='w-full m-4 flex justify-end z-10 border'>
        <CanvasToolbar />
      </div>
    </div>
  );
};

export default Canvas;
