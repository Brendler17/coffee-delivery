import { FormEvent, useContext } from 'react';
import {
  Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash,
} from '@phosphor-icons/react';
import {
  AdressForm, AdressFormHeader, AdressFormInputs, CartContainer, CheckoutFormContainer,
  CoffeeCartContainer, CoffeeCartForm, CoffeeCartInfo, ConfirmOrderButton,
  DeliveryContainer, OrderContainer, OrderForm, OrderInfo, OrderTotal,
  PaymentForm, PaymentFormHeader, PaymentFormInputs, PaymentOption,
} from './styles';
import { CartContext } from '../../contexts/CartContext';
import { coffees } from '../../../data.json';

export function Checkout() {
  const { itemsCart } = useContext(CartContext);

  const coffeesInCart = itemsCart.map((item) => {
    const infoCoffee = coffees.find((coffee) => coffee.id === item.id);

    if (!infoCoffee) {
      throw new Error('Café não encontrado');
    }

    return {
      ...infoCoffee,
      quantity: item.quantity,
    };
  });

  function handleCreateNewOrder(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <CheckoutFormContainer onSubmit={handleCreateNewOrder}>
      <DeliveryContainer>
        <h3>Complete seu pedido</h3>
        <AdressForm>
          <AdressFormHeader>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber o seu pedido</span>
            </div>
          </AdressFormHeader>
          <AdressFormInputs>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento (Opcional)" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </AdressFormInputs>
        </AdressForm>
        <PaymentForm>
          <PaymentFormHeader>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </PaymentFormHeader>
          <PaymentFormInputs>
            <PaymentOption>
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </PaymentOption>
            <PaymentOption>
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </PaymentOption>
            <PaymentOption>
              <Money size={16} />
              <span>Dinheiro</span>
            </PaymentOption>
          </PaymentFormInputs>
        </PaymentForm>
      </DeliveryContainer>

      <OrderContainer>
        <h3>Cafés selecionados</h3>
        <OrderForm>
          <CartContainer>
            {
              coffeesInCart.map((coffee) => (
                <CoffeeCartContainer>
                  <CoffeeCartInfo>
                    <img src={coffee.image} alt="" />
                    <div>
                      <p>{coffee.name}</p>
                      <CoffeeCartForm>
                        <input type="number" value={coffee.quantity} />
                        <button type="button">
                          <Trash size={16} />
                          Remover
                        </button>
                      </CoffeeCartForm>
                    </div>
                  </CoffeeCartInfo>
                  <span>{`R$${coffee.price}0`.replace('.', ',')}</span>
                </CoffeeCartContainer>
              ))
            }
          </CartContainer>
          <OrderInfo>
            <div>
              <span>Total de Itens</span>
              <span>R$ 20,90</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <OrderTotal>
              <span>Total</span>
              <span>R$ 24,40</span>
            </OrderTotal>
          </OrderInfo>
          <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>
        </OrderForm>
      </OrderContainer>
    </CheckoutFormContainer>
  );
}
