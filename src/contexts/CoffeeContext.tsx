import { ReactNode, createContext } from 'react';

interface Coffee {
  id: number;
  img: string;
  name: string;
  types: string[];
  description: string;
  price: number;
}

interface CoffeeContextData {
  coffees: Coffee[];
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextData);

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const coffees: Coffee[] = [
    {
      id: 1,
      img: '../expresso.svg',
      name: 'Expresso Tradicional',
      types: ['tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.90,
    },
    {
      id: 2,
      img: '../americano.svg',
      name: 'Expresso Americano',
      types: ['tradicional'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.90,
    },
    {
      id: 3,
      img: '../expressoCremoso.svg',
      name: 'Expresso Cremoso',
      types: ['tradicional'],
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.90,
    },
    {
      id: 4,
      img: '../cafeGelado.svg',
      name: 'Expresso Gelado',
      types: ['tradicional', 'gelado'],
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.90,
    },
    {
      id: 5,
      img: '../cafeLeite.svg',
      name: 'Café com Leite',
      types: ['tradicional', 'com leite'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.90,
    },
    {
      id: 6,
      img: '../latte.svg',
      name: 'Latte',
      types: ['tradicional', 'com leite'],
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.90,
    },
    {
      id: 7,
      img: '../capuccino.svg',
      name: 'Capuccino',
      types: ['tradicional', 'com leite'],
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.90,
    },
    {
      id: 8,
      img: '../macchiato.svg',
      name: 'Macchiato',
      types: ['tradicional', 'com leite'],
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.90,
    },
    {
      id: 9,
      img: '../mochaccino.svg',
      name: 'Moccacino',
      types: ['tradicional', 'com leite'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.90,
    },
    {
      id: 10,
      img: '../chocolateQuente.svg',
      name: 'Chocolate Quente',
      types: ['especial', 'com leite'],
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 14.90,
    },
    {
      id: 11,
      img: '../cubano.svg',
      name: 'Cubano',
      types: ['especial', 'alcóolico', 'gelado'],
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 14.90,
    },
    {
      id: 12,
      img: '../havaiano.svg',
      name: 'Havaiano',
      types: ['especial'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 14.90,
    },
    {
      id: 13,
      img: '../arabe.svg',
      name: 'Árabe',
      types: ['especial'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 14.90,
    },
    {
      id: 14,
      img: '../irlandes.svg',
      name: 'Irlandês',
      types: ['especial', 'alcóolico'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 14.90,
    },
  ];

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  );
}
