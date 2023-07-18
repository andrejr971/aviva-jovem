import { CountAlert, Header } from '@/components';
import { Container } from './styles';

export function HomeTemplate() {
  return (
    <Container>
      <Header />

      <CountAlert />
    </Container>
  );
}
