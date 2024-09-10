import {
  createContext, ReactNode,
} from 'react';

interface CartContextData {

}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  return (
    <CartContext.Provider value={ }>
      {children}
    </CartContext.Provider>
  );
}
