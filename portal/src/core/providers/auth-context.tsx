/* eslint-disable react-refresh/only-export-components */

import { createUserWithEmailAndPassword, type User } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import type { AuthContextType } from '../types/auth';

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
