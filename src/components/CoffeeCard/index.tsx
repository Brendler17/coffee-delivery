import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import {
  Action,
  Card, Description, Form, Img, Price, Title, Types,
} from './styles';
import { CartContext } from '../../contexts/CartContext';

type Props = {
  coffee: {
    id: string
    image: string
    name: string
    types: string[],
    description: string,
    price: number
  }
};

export function CoffeeCard({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1);

  const { addNewCoffeeToCart } = useContext(CartContext);

  function handleAddItem() {
    addNewCoffeeToCart({ id: coffee.id, quantity });
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <Card>

      <Img src={coffee.image} alt="" />

      <Types>
        {coffee.types.map((type) => (
          <span>{type}</span>
        ))}
      </Types>

      <Title>{coffee.name}</Title>

      <Description>{coffee.description}</Description>

      <Form>

        <Price>
          <p>R$</p>
          <p>{`${coffee.price}0`.replace('.', ',')}</p>
        </Price>

        <Action>
          <div>
            <button type="button" onClick={decrementQuantity}>
              <Minus />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={incrementQuantity}>
              <Plus />
            </button>
          </div>
          <button type="button" onClick={handleAddItem}>
            <ShoppingCart size={22} weight="fill" color="white" />
          </button>
        </Action>

      </Form>
    </Card>
  );
}
