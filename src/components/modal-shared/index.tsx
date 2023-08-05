import { Button } from '../button';
import { Container } from './styles';

export function ModalShared() {
  const handleShared = async () => {
    const message = `Se liga galera o Aviva Jovem voltou!!!\nE você é o meu convidado\nSerão 2 dias:\n no dia 09 de Setembro às 18h30, na Sede Regional de Vargem Grande Pta., rua Nova Esperança, 64 - Jd. São Judas e \n 10 de Setembro às 08h30, na ADF Jd. Vargem Grande., rua Esperança, 241 - Jd. Vargem Grande\n\nPara mais informações acesse o link: \nhttps://avivajovemadf.vercel.app/`;

    let url = '';

    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      url = 'whatsapp://send';
    } else {
      url = 'https://api.whatsapp.com';
    }

    window.location.href = `${url}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
      architecto similique exercitationem labore itaque ipsam unde ipsum libero
      facilis. Officiis quibusdam voluptatibus odio eos maxime est? Voluptatibus
      officia perferendis odio.
      <Button onClick={handleShared}>Compartilhar</Button>
    </Container>
  );
}
