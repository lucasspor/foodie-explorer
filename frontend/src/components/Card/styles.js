import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 0.8rem;
  
  width: 30rem;
  height: 46.2rem;
  
  .favorite, .edit {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    cursor: pointer;
    
    z-index: 1;
  }
`;

export const Content = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > h3 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    margin-bottom: 1.6rem;
    cursor: pointer;
  }
  
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    margin-bottom: 1.6rem;
  }
  
  > span {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    margin-bottom: 1.6rem;
  }
  
  > .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;

export const FoodImage = styled.div`
  width: 17.6rem;
  height: 17.6rem;
  margin-bottom: 1.6rem;
  
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;