import Image from 'next/image';
import { Container, Description } from './styles';
import { CardShepherdProps } from './types';

export function CardShepherd({
  data: { name, office, profile },
  ...props
}: CardShepherdProps) {
  return (
    <Container {...props}>
      <Image src={profile} alt={`perfil do ${name}`} width={456} height={500} />

      <Description>
        <div>
          <strong>{name}</strong>
          <span>{office}</span>
        </div>
      </Description>
    </Container>
  );
}
