import { createContext, ReactNode, useContext } from 'react';

interface IActionContextData {
  handleShare: () => Promise<void>;
  handleShareLocation: () => Promise<void>;
}

interface ActionProviderProps {
  children: ReactNode;
}

const ActionContextData = createContext({} as IActionContextData);

export function ActionProvider({ children }: ActionProviderProps) {
  async function handleShare() {
    const message = `Se liga galera o Aviva Jovem voltou!!!\nE você é o meu convidado\nSerá no dia 18 de Setembro às 19h00, na Sede Regional de Vargem Grande Pta., rua Nova Esperança, 64 - Jd. São Judas\n\nPara mais informações acesse o link: \nhttps://avivajovemadf.com`;

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
  }

  async function handleShareLocation() {
    window.location.href = 'https://goo.gl/maps/3W9Zm5cFzvrVRKmR9';
  }

  return (
    <ActionContextData.Provider
      value={{
        handleShare,
        handleShareLocation,
      }}
    >
      {children}
    </ActionContextData.Provider>
  );
}

export function useAction() {
  const context = useContext(ActionContextData);

  return context;
}
