import type { KonvaEventObject } from 'konva/lib/Node';
import type { Stage } from 'konva/lib/Stage';
import type { RefObject } from 'react';

export type ToolType = 'pen' | 'eraser' | 'fill';

export interface Point {
  x: number;
  y: number;
}

export interface Stroke {
  tool: ToolType;
  color: string;
  size: number;
  points: Point[];
}

export interface CanvasContextType {
  stageRef: RefObject<Stage | null>;
  tool: ToolType;
  color: string;
  brushSize: number;
  lines: Stroke[];
  handleMouseDown: (e: KonvaEventObject<MouseEvent>) => void;
  handleMouseMove: (e: KonvaEventObject<MouseEvent>) => void;
  handleMouseUp: (e: KonvaEventObject<MouseEvent>) => void;
  clearCanvas: () => void;
  undoLastStroke: () => void;
  setTool: (tool: ToolType) => void;
  setColor: (color: string) => void;
  setBrushSize: (size: number) => void;
}
