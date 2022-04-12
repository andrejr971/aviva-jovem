import Image from 'next/image';
import { IShepherdsDTO } from '../../../dtos/IBoardsDTO';
import { Container, Profile } from './styles';

interface ICardBoardProps {
  shepherd: IShepherdsDTO;
}

export function CardBoard({ shepherd }: ICardBoardProps) {
  return (
    <Container>
      <Image src={shepherd.profile} width={384} height={400} />

      <Profile>
        <h5>{shepherd.name}</h5>
        <strong>{shepherd.office}</strong>
      </Profile>
    </Container>
  );
}
