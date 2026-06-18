import type { User } from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';

export interface AuthContextType {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
}
