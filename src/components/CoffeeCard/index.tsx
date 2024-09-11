import { ShoppingCart } from '@phosphor-icons/react';
import {
  Action,
  Card, Description, Form, Img, Price, Title, Types,
} from './styles';

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
          <input
            id="quantity"
            type="number"
            min={1}
          />
          <button type="button">
            <ShoppingCart size={22} weight="fill" color="white" />
          </button>
        </Action>

      </Form>
    </Card>
  );
}
