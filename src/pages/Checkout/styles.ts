import styled from 'styled-components';

export const CheckoutFormContainer = styled.form`
  max-width: 70rem;
  margin: calc(5rem + 110px) auto 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme.subtitle};
    margin-bottom: 1rem;
  }
`;

export const DeliveryContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AdressForm = styled.div`
  background: ${(props) => props.theme.card};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
`;

export const AdressFormHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-500']}
  }

  p {
    color: ${(props) => props.theme.subtitle};
  }

  span {
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
  }
`;

export const AdressFormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.button};
    border-radius: 4px;
    padding: 0.75rem;
    color: ${(props) => props.theme.label};
    font-size: 0.875rem;

    &:nth-child(1){
      width: 200px;
    }
  }

  div {
    display: flex;
    gap: 1rem;
  }

  div:nth-child(3) {
    input:nth-child(2) {
      flex: 1;
    }
  }

  div:nth-child(4) {
    input:nth-child(3) {
      width: 60px;
    }
  }
`;

export const PaymentForm = styled.div`
  background: ${(props) => props.theme.card};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
`;

export const PaymentFormHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-300']};
  }

  p {
    color: ${(props) => props.theme.subtitle};
  }

  span {
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
  }
`;

export const PaymentFormInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${(props) => props.theme.button};
  border-radius: 6px;
  gap: 0.75rem;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['purple-300']};
  }

  span {
    color: ${(props) => props.theme.text};
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
  }
`;

export const OrderContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OrderForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background: ${(props) => props.theme.card};
  gap: 1.5rem;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;

  div + div {
    padding-top: 1.5rem;
  }
`;

export const CoffeeCartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.button};
  padding-bottom: 1.5rem;

  > span {
    color: ${(props) => props.theme.text};
    font-weight: 700;
  }
`;

export const CoffeeCartInfo = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p {
    color: ${(props) => props.theme.subtitle};
  }
`;

export const CoffeeCartForm = styled.div`
  display: flex;
  gap: 8px;

  input {
    width: 4.5rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.button};
    padding: 0.5rem;
    color: ${(props) => props.theme.text};
    text-align: center;
    line-height: 0;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    gap: 4px;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.button};
    
    font-size: 0.75rem;
    color: ${(props) => props.theme.text};
    line-height: 1.6;
    text-transform: uppercase;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-300']};
    }
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  div {
    display: flex;
    justify-content: space-between;

    &:nth-child(1){
      color: ${(props) => props.theme.text};

     span {
      &:first-child{
        font-size: 0.875rem;
      }
     }
    }

    &:nth-child(2){
      color: ${(props) => props.theme.text};

     span {
      &:first-child{
        font-size: 0.875rem;
      }
     }
    }
  }

  button {
    padding: 0.75rem 0.5rem;
  }
`;

export const OrderTotal = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.subtitle};
`;

export const ConfirmOrderButton = styled.button`
  padding: 0.75rem 0.5rem;
  background: ${(props) => props.theme['yellow-300']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
`;
