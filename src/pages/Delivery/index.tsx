import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import {
  Adress, DeliveryContainer, DeliveryContent, DeliveryHeader, DeliveryInfo, InfoIten,
} from './styles';
import deliveryBanner from '../../assets/delivery.svg';

export function Delivery() {
  return (
    <DeliveryContainer>
      <DeliveryHeader>
        <p>Uhu! Pedido confirmado</p>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </DeliveryHeader>
      <DeliveryContent>
        <DeliveryInfo>
          <InfoIten variant="purple">
            <div><MapPin size={16} weight="fill" /></div>
            <div>
              <Adress>
                <span>Entrega em</span>
                <p>Rua Dr. Armando Fagundes, 575</p>
              </Adress>
              <span>Areal - Pelotas, RS</span>
            </div>
          </InfoIten>
          <InfoIten variant="yellow">
            <div><Timer size={16} weight="fill" /></div>
            <div>
              <span>Previsão de Entrega</span>
              <p>20min - 30min</p>
            </div>
          </InfoIten>
          <InfoIten variant="yellow-dark">
            <div><CurrencyDollar size={16} /></div>
            <div>
              <span>Pagamento na Entrega</span>
              <p>Cartão de Crédito</p>
            </div>
          </InfoIten>
        </DeliveryInfo>
        <img src={deliveryBanner} alt="" />
      </DeliveryContent>
    </DeliveryContainer>
  );
}
