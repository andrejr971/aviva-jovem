import Image from 'next/image';
import { Container, Description, Information } from './styles';
import { Button } from '@/components/button';
import { CardProps } from './types';

export function CardWithImage({ imageUrl, alt, description }: CardProps) {
  return (
    <Container>
      <Image src={imageUrl} alt={alt} width={400} height={500} />

      {description && (
        <Description>
          <div>
            <Information>
              <p>{description.header}</p>

              <div>
                <strong>{description.date}</strong>
                <span>{description.monthAndYear}</span>
              </div>

              <p>{description.address}</p>
            </Information>

            <Button variant="secondary" onClick={description.button.onClick}>
              {description.button.children}
            </Button>
          </div>
        </Description>
      )}
    </Container>
  );
}
