import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: footer;
  
  width: 100%;
  height: 7.7rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 12.3rem;
  
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  
  @media (max-width: 768px) {
    padding: 0 2.8rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  
  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  
  @media (max-width: 768px) {
    > h1 {
      font-size: 1.5rem;
    }
  }
`;