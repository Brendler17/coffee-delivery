import { ShoppingCart } from '@phosphor-icons/react';
import { Card, Form } from './styles';

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
      <img src={coffee.image} alt="" />
      <div>
        {coffee.types.map((type) => (
          <span>{type}</span>
        ))}
      </div>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <div>
        <div>
          <p>R$</p>
          <p>{`${coffee.price}0`.replace('.', ',')}</p>
        </div>
        <Form>
          <input
            id="quantity"
            type="number"
            min={1}
          />
          <button type="button">
            <ShoppingCart size={22} weight="fill" color="white" />
          </button>
        </Form>
      </div>
    </Card>
  );
}
