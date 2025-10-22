import { useCanvasContext } from '../../core/providers/canvas-context';
import { HexColorPicker } from 'react-colorful';
import { Save, Trash, Undo } from 'lucide-react';
import { Popover } from 'antd';

const CanvasToolbar = () => {
  const { tool, setTool, color, setColor, clearCanvas, undoLastStroke } = useCanvasContext();

  const icons = {
    undo: <Undo size={16} />,
    clear: <Trash size={16} />,
    save: <Save size={16} />,
  };

  return (
    <div className='flex items-center space-x-4 p-4 border-b border-gray-300'>
      <select value={tool} onChange={(e) => setTool(e.target.value as 'pen' | 'eraser' | 'fill')}>
        <option value='pen'>Pen</option>
        <option value='eraser'>Eraser</option>
        {/* <option value='fill'>Fill</option> */}
      </select>

      <Popover content={<HexColorPicker color={color} onChange={setColor} />} trigger='click'>
        <div style={{ backgroundColor: color }} className='w-8 h-8 border border-gray-300 rounded cursor-pointer' />
      </Popover>

      <div>
        {/* Change these buttons to shared? */}
        <button onClick={undoLastStroke} className='px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'>
          {icons.undo}
        </button>

        <button
          onClick={clearCanvas}
          className='ml-2 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'
        >
          {icons.clear}
        </button>

        <button onClick={() => {}} className='ml-2 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'>
          {icons.save}
        </button>
      </div>
    </div>
  );
};

export default CanvasToolbar;
