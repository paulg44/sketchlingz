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

  const startDrawing = (stage: Stage | null) => {
    const point = stage?.getPointerPosition();
    if (!point) return;
    setIsDrawing(true);
    setLines((prevLines) => [
      ...prevLines,
      { tool, color, size: brushSize, points: [{ x: point.x, y: point.y }] },
    ]);
  };

  const continueDrawing = (stage: Stage | null) => {
    if (!isDrawing) return;
    const point = stage?.getPointerPosition();
    if (!point) return;
    setLines((prevLines) => {
      const updatedLines = [...prevLines];
      const lastLine = updatedLines[updatedLines.length - 1];
      lastLine.points = [...lastLine.points, { x: point.x, y: point.y }];
      return updatedLines;
    });
  };

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => startDrawing(e.target.getStage());
  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => continueDrawing(e.target.getStage());
  const handleMouseUp = () => setIsDrawing(false);

  const handleTouchStart = (e: KonvaEventObject<TouchEvent>) => {
    e.evt.preventDefault();
    startDrawing(e.target.getStage());
  };
  const handleTouchMove = (e: KonvaEventObject<TouchEvent>) => {
    e.evt.preventDefault();
    continueDrawing(e.target.getStage());
  };
  const handleTouchEnd = () => setIsDrawing(false);

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
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    clearCanvas,
    undoLastStroke,
  };
};
