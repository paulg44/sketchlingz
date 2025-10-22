export interface ScoreContextType {
  score: string | null;
  setScore: (score: string | null) => void;
  randomItem: string;
  handleCalculateScore: (base64String: string, imageName: string) => Promise<number | null>;
  isDisabled: boolean;
}
