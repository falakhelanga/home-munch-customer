import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Dish } from "../../types/dish";
import { CartType } from "../../types/cart";
import { toast } from "react-toastify";
export type NewItem = Dish & { qty: number };
interface CartContextType {
  cart: CartType;
  addToCart: (newItem: NewItem) => void;
  removeFromCart: (cartItem: NewItem) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: boolean;
  deleteItem: (newItem: NewItem) => void;
}
const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartType>({
    items: [],
    total: 0,
    numItems: 0,
  });
  const [openCart, setOpenCart] = useState(false);
  /////////////////////////////////// SET INITIAL VALUES WHEN THE APP INITIALLY LOADS
  useEffect(() => {
    const iniitalValues = localStorage?.getItem("cart")
      ? JSON.parse(localStorage?.getItem("cart")!!)
      : {
          items: [],
          total: 0,
          numItems: 0,
        };
    setCart(iniitalValues);
  }, []);
  const toggleCart = () => {
    setOpenCart((currState) => !currState);
  };
  ////////////////////////////////// ADD TO CART
  const addToCart = (newItem: NewItem) => {
    if (cart?.items?.length === 0) {
      const updatedCart: CartType = {
        items: [newItem],
        total: newItem.qty * newItem.price,
        numItems: newItem.qty,
      };
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return;
    }
    let updatedCart = { ...cart };
    const isItemAlreadyAdded = cart.items.find(
      (item) => item.id === newItem.id
    );
    const itemAlreadyAddedIndex = cart.items.findIndex(
      (item) => item === isItemAlreadyAdded
    );
    if (!isItemAlreadyAdded) {
      updatedCart.items = [...updatedCart.items, newItem];
      updatedCart.total = updatedCart.items.reduce(
        (acc, item) => acc + +item.price * item.qty,
        0
      );
      updatedCart.numItems = updatedCart.items.reduce(
        (acc, curr) => acc + +curr.qty,
        0
      );
    } else {
      updatedCart.items[itemAlreadyAddedIndex].qty =
        updatedCart.items[itemAlreadyAddedIndex].qty + 1;
      updatedCart.total = updatedCart.items.reduce(
        (acc, item) => acc + +item.price * item.qty,
        0
      );
      updatedCart.numItems = updatedCart.items.reduce(
        (acc, curr) => acc + +curr.qty,
        0
      );
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // toast.success("Dish added successfully");
  };
  //////// clear cart
  const clearCart = () => {
    setCart({
      items: [],
      total: 0,
      numItems: 0,
    });
    localStorage.removeItem("cart");
  };

  //////////////////////////////////// remove from cart

  const removeFromCart = (newItem: NewItem) => {
    let updatedCart = { ...cart };
    const isItemAlreadyAdded = cart.items.find(
      (item) => item.id === newItem.id
    );
    const itemAlreadyAddedIndex = cart.items.findIndex(
      (item) => item === isItemAlreadyAdded
    );
    // if (!isItemAlreadyAdded) {
    //   updatedCart.items = [...updatedCart.items, newItem];
    //   updatedCart.total = updatedCart.items.reduce(
    //     (acc, item) => acc + +item.price * item.qty,
    //     0
    //   );
    //   updatedCart.numItems = updatedCart.items.reduce(
    //     (acc, curr) => acc + +curr.qty,
    //     0
    //   );
    // } else {
    updatedCart.items[itemAlreadyAddedIndex].qty =
      updatedCart.items[itemAlreadyAddedIndex].qty - 1;
    if (updatedCart.items[itemAlreadyAddedIndex].qty < 1) {
      updatedCart.items = updatedCart.items.filter(
        (item) => item.id !== isItemAlreadyAdded?.id
      );

      updatedCart.total = updatedCart.items.reduce(
        (acc, item) => acc + +item.price * item.qty,
        0
      );
      updatedCart.numItems = updatedCart.items.reduce(
        (acc, curr) => acc + +curr.qty,
        0
      );

      // }

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // toast.success("Dish removed successfully");
      return;
    }
    updatedCart.total = updatedCart.items.reduce(
      (acc, item) => acc + +item.price * item.qty,
      0
    );
    updatedCart.numItems = updatedCart.items.reduce(
      (acc, curr) => acc + +curr.qty,
      0
    );

    // }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // toast.success("Dish removed successfully");
  };

  //////////////////////////////////// remove from cart

  const deleteItem = (newItem: NewItem) => {
    let updatedCart = { ...cart };
    const isItemAlreadyAdded = cart.items.find(
      (item) => item.id === newItem.id
    );
    const itemAlreadyAddedIndex = cart.items.findIndex(
      (item) => item === isItemAlreadyAdded
    );

    updatedCart.items[itemAlreadyAddedIndex].qty =
      updatedCart.items[itemAlreadyAddedIndex].qty - 1;

    updatedCart.items = updatedCart.items.filter(
      (item) => item.id !== isItemAlreadyAdded?.id
    );

    updatedCart.total = updatedCart.items.reduce(
      (acc, item) => acc + +item.price * item.qty,
      0
    );
    updatedCart.numItems = updatedCart.items.reduce(
      (acc, curr) => acc + +curr.qty,
      0
    );

    // }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        removeFromCart,
        addToCart,
        clearCart,
        openCart,
        toggleCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext) as CartContextType;
