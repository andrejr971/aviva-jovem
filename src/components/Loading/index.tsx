import { Logo } from '../Svgs/Logo';
import { Container, Description, TextInvite } from './styles';

export function Loading() {
  return (
    <Container>
      <Logo />
      <Description>
        Aviva Jovem
        <br />
        <span>Voltou!!</span>
      </Description>

      <TextInvite>
        Você é o nosso <span>convidado!!</span>
      </TextInvite>
    </Container>
  );
}
