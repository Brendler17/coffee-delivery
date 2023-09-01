import {
  Coffee, Package, ShoppingCart, Timer,
} from '@phosphor-icons/react';
import {
  HomeContainer, HomeHeader, HomeInfo, HomeItens, InfoIten, ListContainer, CoffeeList, CoffeeCard,
} from './styles';
import coffeeDeliveryBanner from '../../assets/banner.svg';

export function Home() {
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
          <CoffeeCard>
            {/* <img src="" alt="" />
            <span>Tradicional</span>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <p>R$9,90</p>
              <input type="number" />
              <button type="submit">
                <ShoppingCart size={16} weight="fill" />
              </button>
            </div> */}
          </CoffeeCard>
        </CoffeeList>
      </ListContainer>
    </HomeContainer>
  );
}
