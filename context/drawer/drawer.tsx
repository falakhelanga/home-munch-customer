import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";

interface DrawerTypes {
  isDrawerOpen: string | null;
  openDrawer: (value: string, title: string) => void;
  closeDrawer: () => void;
  drawerTitle: string | null;
}

const DrawerContext = createContext<DrawerTypes | null>(null);

const DrawerContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<string | null>(null);
  const [drawerTitle, setDrawerTitle] = useState<string | null>(null);
  const openDrawer = (value: string, title: string) => {
    setDrawerTitle(title);
    setIsDrawerOpen(value);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(null);
  };

  return (
    <DrawerContext.Provider
      value={{ isDrawerOpen, openDrawer, closeDrawer, drawerTitle }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;

export const useDrawer = () => useContext(DrawerContext) as DrawerTypes;
