import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { DishType } from "../../types/dish";

interface DishContextType {
  selectDish: (dish: any) => void;
  selectedDish: DishType | null;
}
const DishContext = createContext<DishContextType | null>(null);

const DishProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDish, setSelectedDish] = useState<DishType | null>(null);

  const selectDish = (dish: any) => {
    setSelectedDish(dish);
  };
  return (
    <DishContext.Provider value={{ selectedDish, selectDish }}>
      {children}
    </DishContext.Provider>
  );
};

export default DishProvider;
export const useDish = () => useContext(DishContext) as DishContextType;
