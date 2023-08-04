import { useMemo } from 'react';
import { Container } from './styles';

export function CountAlert() {
  const diffDays = useMemo(() => {
    const dateStart = new Date();
    const dateEnd = new Date('09/09/2023');

    return parseInt(
      String((dateEnd.getTime() - dateStart.getTime()) / (1000 * 60 * 60 * 24)),
      10,
    );
  }, []);

  return (
    <Container>
      <div>
        <p>O Aviva Jovem da ADF Vargem Grande Paulista está chegando!!! 🔥</p>
        <span></span>
        <p>Faltam {diffDays} dias</p>
      </div>
    </Container>
  );
}
