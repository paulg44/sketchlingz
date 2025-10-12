/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { useCanvas } from '../engine/drawing/use-canvas';
import type { CanvasContextType } from '../types/canvas';

const CanvasContext = createContext<CanvasContextType | null>(null);

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const canvas = useCanvas();
  return <CanvasContext.Provider value={canvas}>{children}</CanvasContext.Provider>;
};

export const useCanvasContext = (): CanvasContextType => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvasContext must be used within a CanvasProvider');
  }
  return context;
};
