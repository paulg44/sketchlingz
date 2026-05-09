import { useCanvasContext } from '../../core/providers/canvas-context';
import { useScoreContext } from '../../core/providers/score-context';
import { useItem } from '../../core/providers/item-context';
import { HexColorPicker } from 'react-colorful';
import { Save, Trash, Undo } from 'lucide-react';
import { Popover } from 'antd';

const CanvasToolbar = () => {
  const { tool, setTool, color, setColor, clearCanvas, undoLastStroke, stageRef } = useCanvasContext();
  const score = useScoreContext();
  const { randomItem } = useItem();

  const handleSave = async () => {
    if (!stageRef.current || !randomItem || !score) return;
    const base64 = stageRef.current.toDataURL().split(',')[1];
    await score.handleCalculateScore(base64, randomItem.name);
  };

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
      </select>

      <Popover content={<HexColorPicker color={color} onChange={setColor} />} trigger='click'>
        <div style={{ backgroundColor: color }} className='w-8 h-8 border border-gray-300 rounded cursor-pointer' />
      </Popover>

      <div>
        <button onClick={undoLastStroke} className='px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'>
          {icons.undo}
        </button>

        <button
          onClick={clearCanvas}
          className='ml-2 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50'
        >
          {icons.clear}
        </button>

        <button
          onClick={handleSave}
          disabled={score?.isDisabled}
          className='ml-2 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {icons.save}
        </button>
      </div>

      {score?.score && <span className='ml-4 font-semibold text-gray-700'>{score.score}</span>}
    </div>
  );
};

export default CanvasToolbar;
