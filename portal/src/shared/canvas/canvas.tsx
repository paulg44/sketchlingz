import CanvasStage from './canvas-stage';
import CanvasToolbar from './canvas-toolbar';

const Canvas = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full relative'>
      <div className='w-full absolute bottom-0 flex justify-end z-10'>
        <CanvasToolbar />
      </div>
      <CanvasStage />
    </div>
  );
};

export default Canvas;
