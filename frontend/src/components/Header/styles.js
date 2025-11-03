import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  
  height: 10.4rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 12.3rem;
  gap: 3.2rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  @media (max-width: 1024px) {
    padding: 0 5rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
    gap: 0.5rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  
  cursor: pointer;

  > h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 2rem;
    }
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 58.1rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Logout = styled.button`
  border: none;
  background: none;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
  }
`;