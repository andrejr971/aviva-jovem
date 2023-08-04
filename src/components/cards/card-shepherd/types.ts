import { HTMLAttributes } from 'react';
import { ShepherdDTO } from '@/dtos';

export type CardShepherdProps = HTMLAttributes<HTMLDivElement> & {
  data: ShepherdDTO;
};
