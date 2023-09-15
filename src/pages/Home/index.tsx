import { useContext } from 'react';
import {
  Coffee, Package, ShoppingCart, Timer,
} from '@phosphor-icons/react';
import { CoffeeContext } from '../../contexts/CoffeeContext';
import {
  HomeContainer, HomeHeader, HomeInfo, HomeItens, InfoIten, ListContainer, CoffeeList, CoffeeCard,
} from './styles';
import coffeeDeliveryBanner from '../../assets/banner.svg';

export function Home() {
  const { coffees } = useContext(CoffeeContext);

  return (
    <HomeContainer>
      <HomeHeader>
        <div>
          <HomeInfo>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </HomeInfo>
          <HomeItens>
            <InfoIten variant="yellow-dark">
              <div><ShoppingCart size={16} weight="fill" /></div>
              <p>Compra simples e segura</p>
            </InfoIten>
            <InfoIten variant="gray">
              <div><Package size={16} weight="fill" /></div>
              <p>Embalagem mantém o café intacto</p>
            </InfoIten>
            <InfoIten variant="yellow">
              <div><Timer size={16} weight="fill" /></div>
              <p>Entrega rápida e rastreada</p>
            </InfoIten>
            <InfoIten variant="purple">
              <div><Coffee size={16} weight="fill" /></div>
              <p>O café chega fresquinho até você</p>
            </InfoIten>
          </HomeItens>
        </div>
        <img src={coffeeDeliveryBanner} alt="" />
      </HomeHeader>
      <ListContainer>
        <h3>Nossos cafés</h3>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id}>
              <img src={coffee.img} alt="" />
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
                <form>
                  <input type="number" />
                  <button type="submit">
                    <ShoppingCart size={22} weight="fill" color="white" />
                  </button>
                </form>
              </div>
            </CoffeeCard>
          ))}
        </CoffeeList>
      </ListContainer>
    </HomeContainer>
  );
}
