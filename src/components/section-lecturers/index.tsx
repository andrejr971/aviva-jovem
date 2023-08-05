import { Container, Content, Card } from './styles';
import { SectionLecturersProps } from './types';

export function SectionLecturers({ lecturers }: SectionLecturersProps) {
  return (
    <Container>
      <h3>
        <span>Preletores</span>&<span>Cantores</span>
      </h3>

      <Content>
        {lecturers.map(lecturer => (
          <Card key={lecturer.id} data={lecturer} />
        ))}
      </Content>
    </Container>
  );
}
