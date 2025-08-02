import { useState, useRef, useCallback } from 'react';
import type Konva from 'konva';
import type { KonvaEventObject } from 'konva/lib/Node';

export type ToolType = 'pen' | 'eraser';

interface Line {
  tool: string;
  points: number[];
  color: string;
}

export const useCanvas = () => {
  const [tool, setTool] = useState<ToolType>('pen');
  const [lines, setLines] = useState<Line[]>([]);
  const [color, setColor] = useState<string>('#fff');

  const isDrawing = useRef(false);

  const stageRef = useRef<Konva.Stage | null>(null);

  const handleDisableScroll = useCallback((e: TouchEvent) => {
    e.preventDefault();
  }, []);

  const handleMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      e.evt.preventDefault();
      isDrawing.current = true;

      document.addEventListener('touchmove', handleDisableScroll, { passive: false });

      const stage = e.target.getStage();
      const point = stage?.getPointerPosition();
      if (!point) return;
      setLines((prevLines) => [
        ...prevLines,
        {
          tool,
          points: [point.x, point.y],
          color,
        },
      ]);
    },
    [tool, color, handleDisableScroll]
  );

  const handleMouseMove = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      if (!isDrawing.current) return;

      const stage = e.target.getStage();
      const point = stage?.getPointerPosition();
      if (!point) return;

      setLines((prevLines) => {
        const lastLine = prevLines[prevLines.length - 1];
        if (!lastLine || lastLine.tool !== tool) return prevLines;

        const newPoints = [...lastLine.points, point.x, point.y];
        return [...prevLines.slice(0, -1), { ...lastLine, points: newPoints }];
      });
    },
    [tool]
  );

  const handleMouseUp = useCallback(() => {
    isDrawing.current = false;
    document.removeEventListener('touchmove', handleDisableScroll);
  }, [handleDisableScroll]);

  const clearCanvas = useCallback(() => {
    setLines([]);
  }, []);

  return {
    tool,
    setTool,
    lines,
    setLines,
    color,
    setColor,
    stageRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    clearCanvas,
  };
};
