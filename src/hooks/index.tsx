import { ReactNode } from 'react';
import { ActionProvider } from './actions';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <ActionProvider>{children}</ActionProvider>;
}
