import { useContext, createContext, ReactNode, useState } from "react";

interface ModalType {
  isModalOpen: string | null;
  openModal: (value: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalType | null>(null);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setModalOpen] = useState<string | null>(null);

  const openModal = (value: string) => {
    setModalOpen(value);
  };

  const closeModal = () => {
    setModalOpen(null);
  };
  return (
    <ModalContext.Provider value={{ closeModal, openModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
export const useModal = () => useContext(ModalContext) as ModalType;
