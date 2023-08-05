import { ReactNode } from 'react';

export type CardProps = {
  header: string;
  date: string;
  monthAndYear: string;
  address: string;
  variant?: 'primary' | 'secondary';
  button: {
    onClick: () => void;
    children: ReactNode;
  };
};
