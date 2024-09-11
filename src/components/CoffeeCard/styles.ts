import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem 1.25rem;
  background: ${(props) => props.theme.card};
  border-radius: 6px 36px;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 0.75rem;
  margin-top: -22px;
`;

export const Types = styled.div`
  span {
    color: ${(props) => props.theme['yellow-500']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-100']};
  }

  span + span {
    margin-left: 8px;
  }
`;

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.subtitle};
  padding: 1rem 0 0.25rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.label};
  font-size: 0.875rem;
  text-align: center;
  padding: 0.5rem 0 2rem;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p{
    padding: 0;
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
  }

  p:last-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const Action = styled.div`
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
    justify-content: center;
    padding: 0.5rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-300']};
    cursor: pointer;
  }

  svg {
    line-height: 0;
  }
`;
