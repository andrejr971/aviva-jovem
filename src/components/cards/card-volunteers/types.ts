import { HTMLAttributes, ReactNode } from 'react';

export type CardVolunteersProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: ReactNode;
};
