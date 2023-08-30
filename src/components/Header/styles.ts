import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['purple-500']};
`;

export const Localization = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 4px;
  background: ${(props) => props.theme['purple-100']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple-300']}
  }

  span {
    font-size: 0.875rem;
  }
`;

export const Cart = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-100']};
  line-height: 0;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }
`;
