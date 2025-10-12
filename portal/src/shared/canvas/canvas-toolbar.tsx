import { useCanvasContext } from '../../core/providers/canvas-context';
import { HexColorPicker } from 'react-colorful';

const CanvasToolbar = () => {
  const { tool, setTool, color, setColor, clearCanvas, undoLastStroke } = useCanvasContext();

  return (
    <div className='flex items-center space-x-4 p-4 bg-gray-100 border-b border-gray-300'>
      <select value={tool} onChange={(e) => setTool(e.target.value as 'pen' | 'eraser' | 'fill')}>
        <option value='pen'>Pen</option>
        <option value='eraser'>Eraser</option>
        <option value='fill'>Fill</option>
      </select>

      <div>
        <HexColorPicker color={color} onChange={setColor} />{' '}
      </div>

      <div>
        <button onClick={undoLastStroke} className='px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'>
          Undo
        </button>
        <button
          onClick={clearCanvas}
          className='ml-2 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CanvasToolbar;
