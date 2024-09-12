import {
  createContext, ReactNode,
  useState,
} from 'react';

interface CoffeeCart {
  id: string,
  quantity: number
}

interface CartContextData {
  itemsCart: CoffeeCart[],
  addNewCoffeeToCart: (coffee: CoffeeCart) => void,
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemsCart, setItemsCart] = useState<CoffeeCart[]>([]);

  function addNewCoffeeToCart(coffee: CoffeeCart) {
    setItemsCart([coffee, ...itemsCart]);
  }

  return (
    <CartContext.Provider value={{
      addNewCoffeeToCart,
      itemsCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}
