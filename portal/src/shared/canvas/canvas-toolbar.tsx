import { useCanvasContext } from '../../core/providers/canvas-context';
import { HexColorPicker } from 'react-colorful';
import { Trash, Undo } from 'lucide-react';
import { Popover } from 'antd';

const CanvasToolbar = () => {
  const { tool, setTool, color, setColor, brushSize, setBrushSize, clearCanvas, undoLastStroke } = useCanvasContext();

  const icons = {
    undo: <Undo size={16} />,
    clear: <Trash size={16} />,
  };

  return (
    <div className='w-full flex items-center space-x-4 p-4 border border-gray-300'>
      <select value={tool} onChange={(e) => setTool(e.target.value as 'pen' | 'eraser' | 'fill')}>
        <option value='pen'>Pen</option>
        <option value='eraser'>Eraser</option>
        <option value='fill'>Fill</option>
      </select>

      <Popover content={<HexColorPicker color={color} onChange={setColor} />} trigger='click'>
        <div style={{ backgroundColor: color }} className='w-8 h-8 border border-gray-300 rounded cursor-pointer' />
      </Popover>

      <div>
        <input
          type='range'
          min={1}
          max={50}
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
          className='cursor-pointer'
        />
        <span className='ml-2'>{brushSize}px</span>
      </div>
      <button onClick={undoLastStroke} className='px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'>
        {icons.undo}
      </button>

      <button onClick={clearCanvas} className='ml-2 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'>
        {icons.clear}
      </button>
    </div>
  );
};

export default CanvasToolbar;
