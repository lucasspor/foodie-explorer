import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 3.2rem 12.3rem;
  
  > button {
    display: flex;
    align-items: center;
    
    background: none;
    border: none;
    
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    margin-bottom: 4.2rem;
  }
  
  > main {
    display: flex;
    gap: 4.7rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3.2rem 2.8rem;
  }
`;

export const DishImage = styled.div`
  width: 39rem;
  height: 39rem;
  
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  
  @media (max-width: 768px) {
    width: 26.4rem;
    height: 26.4rem;
  }
`;

export const Description = styled.div`
  max-width: 68.7rem;
  
  > h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
  
  > p {
    font-size: 2.4rem;
    margin-bottom: 2.6rem;
  }
  
  > .order {
    display: flex;
    align-items: center;
    gap: 5.4rem;
    
    > span {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
    
    > button {
      max-width: 16.2rem;
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h1 {
      font-size: 2.7rem;
      text-align: center;
    }
    
    > p {
      font-size: 1.6rem;
      text-align: center;
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 4.8rem;
  
  > .ingredient {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    
    > span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;