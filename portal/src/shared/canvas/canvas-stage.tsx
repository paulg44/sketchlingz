import { Layer, Line, Stage } from 'react-konva';
import { useCanvasContext } from '../../core/providers/canvas-context';

const CanvasStage = () => {
  const { stageRef, lines, handleMouseDown, handleMouseMove, handleMouseUp } = useCanvasContext();

  return (
    <Stage
      width={800}
      height={600}
      ref={stageRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className='border border-gray-300 bg-white cursor-crosshair'
    >
      <Layer>
        {lines.map((line, index) => (
          <Line
            key={index}
            points={line.points.flatMap((point) => [point.x, point.y])}
            stroke={line.color}
            strokeWidth={line.size}
            tension={0.5}
            lineCap='round'
            lineJoin='round'
            globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default CanvasStage;
