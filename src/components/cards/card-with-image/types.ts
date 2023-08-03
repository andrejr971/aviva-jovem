import { ReactNode } from 'react';

type IDescription = {
  header: string;
  date: string;
  monthAndYear: string;
  address: string;
  button: {
    onClick: () => void;
    children: ReactNode;
  };
};

export type CardProps = {
  imageUrl: string;
  alt: string;
  description?: IDescription;
};
