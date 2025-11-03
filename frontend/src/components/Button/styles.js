import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  
  height: 4.8rem;
  border: 0;
  padding: 0 1.2rem;
  border-radius: 0.5rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;