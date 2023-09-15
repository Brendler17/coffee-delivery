import styled from 'styled-components';

export const DeliveryContainer = styled.div`
  max-width: 70rem;
  margin: calc(5rem + 110px) auto 0;
`;

export const DeliveryHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-500']};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.subtitle};
  }
`;
export const DeliveryContent = styled.main`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  min-width: 500px;

  border: 1px solid;
  border-radius: 6px 36px 6px 36px;
  border-top-color: ${(props) => props.theme['yellow-300']};
  border-left-color: ${(props) => props.theme['yellow-300']};
  border-right-color: ${(props) => props.theme['purple-300']};
  border-bottom-color: ${(props) => props.theme['purple-300']};
`;

interface InfoItenVariant {
  variant: 'yellow-dark' | 'yellow' | 'purple';
}

const InfoItenColorVariants = {
  'yellow-dark': 'yellow-500',
  yellow: 'yellow-300',
  purple: 'purple-300',
};

export const InfoIten = styled.div<InfoItenVariant>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div:first-child {
    background: ${(props) => props.theme[InfoItenColorVariants[props.variant]]};  
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
  }

  svg {
    color: ${(props) => props.theme.white};
    line-height: 0;
  }

  span, p {
    color: ${(props) => props.theme.text};
  }

  p {
    font-weight: 700;
  }

`;

export const Adress = styled.div`
  display: flex;
  gap: 4px;
`;
