/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { calculateScore } from '../helpers/save-image-helper';
import type { ScoreContextType, ScoreLabel } from '../types/score';

const ScoreContext = createContext<ScoreContextType | null>(null);

export const ScoreProvider = ({ children, randomItem }: { children: React.ReactNode; randomItem: string }) => {
  const [score, setScore] = useState<ScoreLabel | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCalculateScore = async (base64String: string, imageName: string): Promise<ScoreLabel | null> => {
    try {
      setIsDisabled(true);
      const result = await calculateScore(base64String, imageName);
      setScore(result);
      return result;
    } catch (error) {
      console.error('Error calculating score in context', error);
      return null;
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <ScoreContext.Provider value={{ score, setScore, isDisabled, handleCalculateScore, randomItem }}>
      {children}
    </ScoreContext.Provider>
  );
};

// Custom hook to access score context
export const useScoreContext = () => useContext(ScoreContext);
