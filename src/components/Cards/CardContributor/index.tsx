import {
  ILeadersDTO,
  IMusiciansDTO,
  IOuthersDTO,
} from '../../../dtos/IBoardsDTO';
import { Container } from './styles';

interface ICardContributorProps {
  leaders?: ILeadersDTO[];
  musicians?: IMusiciansDTO[];
  outhers?: IOuthersDTO[];
  title: string;
}

export function CardContributor({
  title,
  leaders,
  musicians,
  outhers,
}: ICardContributorProps) {
  return (
    <Container>
      <h5>{title}</h5>

      <ul>
        {leaders &&
          leaders.map(leader => (
            <li key={leader.id}>
              <strong>{leader.name}</strong>
              <span>({leader.congregation})</span>
            </li>
          ))}
        {musicians &&
          musicians.map(musician => (
            <li key={musician.id}>
              <strong>{musician.name}</strong>
            </li>
          ))}
        {outhers &&
          outhers.map(outher => (
            <li key={outher.id}>
              <strong>{outher.name}</strong>
              <span>({outher.office})</span>
            </li>
          ))}
      </ul>
    </Container>
  );
}
