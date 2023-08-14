export const handleShareLocationFirstDay = () => {
  window.location.href = 'https://goo.gl/maps/3W9Zm5cFzvrVRKmR9';
};

export const handleShareLocationSecondDay = () => {
  window.location.href = 'https://goo.gl/maps/dMRhyVTjJoGKhi5M8';
};

export const sharedWithWhasapp = async () => {
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

  if ('share' in navigator) {
    const file = await fetch('/assets/images/flyer.jpg').then(
      async response => await response.blob(),
    );

    await navigator.share({
      files: [
        new File([file], 'Aviva Jovem #2023.jpg', {
          type: 'image/jpeg',
        }),
      ],
    });
  } else {
    window.location.href = `${url}?text=${encodeURIComponent(message)}&img=${
      window.location.origin
    }/assets/images/banner.jpg`;
  }
};
