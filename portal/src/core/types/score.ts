export type ScoreLabel = 'Excellent' | 'Great' | 'Good' | 'Try Again';

export interface ScoreContextType {
  score: ScoreLabel | null;
  setScore: (score: ScoreLabel | null) => void;
  randomItem: string;
  handleCalculateScore: (base64String: string, imageName: string) => Promise<ScoreLabel | null>;
  isDisabled: boolean;
}
