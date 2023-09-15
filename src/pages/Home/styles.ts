import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 70rem;
  margin: calc(5rem + 110px) auto 0;
`;

export const HomeHeader = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  img {
    border-radius: 8px;
  }
`;

export const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1{
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    color: ${(props) => props.theme.title}
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.subtitle}
  }
`;

export const HomeItens = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 16px;
  margin-top: 3rem;
`;

interface InfoItenVariant {
  variant: 'yellow-dark' | 'yellow' | 'purple' | 'gray';
}

const InfoItenColorVariants = {
  'yellow-dark': 'yellow-500',
  yellow: 'yellow-300',
  purple: 'purple-300',
  gray: 'text',
};

export const InfoIten = styled.div<InfoItenVariant>`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    background: ${(props) => props.theme[InfoItenColorVariants[props.variant]]};  
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
  }

  svg {
    color: ${(props) => props.theme.white};
  }

  p {
    color: ${(props) => props.theme.text};
  }
`;

export const ListContainer = styled.section`
  > h3{
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.subtitle};
    margin: 4rem 0;
  }
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem 1.25rem;
  background: ${(props) => props.theme.card};
  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-bottom: 0.75rem;
    margin-top: -22px;
  }

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

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.subtitle};
    padding: 1rem 0 0.25rem;
  }

  p {
    color: ${(props) => props.theme.label};
    font-size: 0.875rem;
    text-align: center;
    padding: 0.5rem 0 2rem;
  }

  div:nth-child(5) {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    div {
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
    }

    form {
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

        svg {
          line-height: 0;
        }
      }
    }
  }
`;
