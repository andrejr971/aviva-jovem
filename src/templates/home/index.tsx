import { About, Boards, Header, Hero } from '@/components';
import { Container } from './styles';
import { HomeProps } from './types';

export function HomeTemplate({
  leaders,
  musicians,
  shepherds,
  volunteers,
}: HomeProps) {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Boards
        leaders={leaders}
        musicians={musicians}
        shepherds={shepherds}
        volunteers={volunteers}
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit,
        facilis iusto impedit neque mollitia deleniti ratione asperiores.
        Recusandae officiis asperiores tempore praesentium deserunt quia
        explicabo ad voluptas deleniti accusamus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit,
        facilis iusto impedit neque mollitia deleniti ratione asperiores.
        Recusandae officiis asperiores tempore praesentium deserunt quia
        explicabo ad voluptas deleniti accusamus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit,
        facilis iusto impedit neque mollitia deleniti ratione asperiores.
        Recusandae officiis asperiores tempore praesentium deserunt quia
        explicabo ad voluptas deleniti accusamus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit,
        facilis iusto impedit neque mollitia deleniti ratione asperiores.
        Recusandae officiis asperiores tempore praesentium deserunt quia
        explicabo ad voluptas deleniti accusamus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit,
        facilis iusto impedit neque mollitia deleniti ratione asperiores.
        Recusandae officiis asperiores tempore praesentium deserunt quia
        explicabo ad voluptas deleniti accusamus.
      </p>
    </Container>
  );
}
