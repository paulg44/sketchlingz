import CanvasStage from './canvas-stage';
import CanvasToolbar from './canvas-toolbar';

const Canvas = () => {
  return (
    <div className='w-auto h-auto relative'>
      <CanvasStage />
      <div className='w-auto absolute bottom-0 right-0 flex justify-end z-10 border'>
        <CanvasToolbar />
      </div>
    </div>
  );
};

export default Canvas;
