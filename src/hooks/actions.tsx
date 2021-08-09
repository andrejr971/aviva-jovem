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
    const message = `Se liga galera o Aviva Jovem voltou!!!\nE você é o meu convidado\nSerá no 18 de Setembro às 19h00, na Sede Regional de Vargem Grande Pta., rua Nova Esperança, 64 - Jd. São Judas\n\nPara mais informações acesse o link: \nhttps://avivajovemadf.com`;

    let url = '';
    if (navigator.platform === 'mobile') {
      url = 'whatsapp://send';
    } else {
      url = 'https://api.whatsapp.com';
    }

    if (navigator.share) {
      await navigator.share({
        title: 'Convite especial',
        text: encodeURIComponent(message),
        url: window.location.href,
      });
    } else {
      window.location.href = `${url}?text=${encodeURIComponent(message)}`;
    }
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
