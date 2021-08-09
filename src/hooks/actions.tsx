import { createContext, ReactNode, useContext } from 'react';

interface IActionContextData {
  handleShare: () => Promise<void>;
}

interface ActionProviderProps {
  children: ReactNode;
}

const ActionContextData = createContext({} as IActionContextData);

export function ActionProvider({ children }: ActionProviderProps) {
  async function handleShare() {
    const message = `Se liga galera o Aviva Jovem voltou!!!\nE você é o meu convidado\nSerá no 18 de Setembro às 19h00, na Sede Regional de Vargem Grande Pta., rua Nova Esperança, 64 - Jd. São Judas\n\nPara mais informações acesse o link: \nhttps://avivajovemadf.com`;

    window.location.href = `whatsapp://send?text=${encodeURIComponent(
      message,
    )}`;
  }

  return (
    <ActionContextData.Provider
      value={{
        handleShare,
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
