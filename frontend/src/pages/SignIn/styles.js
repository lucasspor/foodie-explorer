import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
  
  > h1 {
    font-size: 4.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 6.4rem;
  border-radius: 1.6rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  width: 100%;
  max-width: 47.6rem;
  
  > h2 {
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
  }
  
  > .input-wrapper {
    width: 100%;
    margin-bottom: 3.2rem;
    
    > label {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-bottom: 0.8rem;
      display: block;
    }
  }
  
  > a {
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 3.2rem;
    margin: 0 2rem;
  }
`;