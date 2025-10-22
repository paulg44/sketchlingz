/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { calculateScore } from '../helpers/save-image-helper';
import type { ScoreContextType } from '../types/score';

const ScoreContext = createContext<ScoreContextType | null>(null);

export const ScoreProvider = ({ children, randomItem }: { children: React.ReactNode; randomItem: string }) => {
  const [score, setScore] = useState('Good');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCalculateScore = async (base64String: string, imageName: string): Promise<number | null> => {
    try {
      setIsDisabled(true);
      const result = await calculateScore(base64String, imageName);
      console.log('Score:', result);
      setScore(result);
      setIsDisabled(false);
      return result;
    } catch (error) {
      console.error('Error calculating score in context', error);
      setIsDisabled(false);
      return null;
    }
  };

  // Wrapper to match expected type: (score: string | null) => void
  const handleSetScore = (value: string | null) => {
    setScore(value ?? '');
  };

  return (
    // Makes score state and handlers available to child components
    <ScoreContext.Provider value={{ score, setScore: handleSetScore, isDisabled, handleCalculateScore, randomItem }}>
      {children}
    </ScoreContext.Provider>
  );
};

// Custom hook to access score context
export const useScoreContext = () => useContext(ScoreContext);
