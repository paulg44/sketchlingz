import { useRef, useState } from 'react';
import type { Stroke, ToolType } from '../../types/canvas';
import type { Stage } from 'konva/lib/Stage';
import type { KonvaEventObject } from 'konva/lib/Node';

export const useCanvas = () => {
  const stageRef = useRef<Stage>(null);
  const [lines, setLines] = useState<Stroke[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<ToolType>('pen');
  const [color, setColor] = useState<string>('#000000');
  const [brushSize, setBrushSize] = useState<number>(4);

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    setIsDrawing(true);
    const stage = e.target.getStage();
    const point = stage?.getPointerPosition();
    if (!point) return;
    const { x, y } = point;
    const newLine: Stroke = {
      tool,
      color,
      size: brushSize,
      points: [{ x, y }],
    };
    setLines((prevLines) => [...prevLines, newLine]);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    const stage = e.target.getStage();
    const point = stage?.getPointerPosition();
    if (!point) return;
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.evt;
    setLines((prevLines) => {
      const updatedLines = [...prevLines];
      const lastLine = updatedLines[updatedLines.length - 1];
      lastLine.points = [...lastLine.points, { x: offsetX, y: offsetY }];
      return updatedLines;
    });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    setLines([]);
  };
  const undoLastStroke = () => {
    setLines((prevLines) => prevLines.slice(0, -1));
  };

  return {
    stageRef,
    tool,
    color,
    brushSize,
    lines,
    setTool,
    setColor,
    setBrushSize,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    clearCanvas,
    undoLastStroke,
  };
};
