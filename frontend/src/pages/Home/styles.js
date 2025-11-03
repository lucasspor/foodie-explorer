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
  
  > section {
    margin-top: 4.8rem;
    
    > h2 {
      font-size: 3.2rem;
      margin-bottom: 2.4rem;
    }
    
    > .cards {
      display: flex;
      gap: 2.7rem;
      overflow-x: auto;
      padding-bottom: 2.4rem;
      
      &::-webkit-scrollbar {
        height: 0.7rem;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BLUE};
        border-radius: 0.7rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 3.2rem 2.8rem;
  }
`;

export const Banner = styled.div`
  position: relative;
  margin-top: 2.5rem;
  
  > img {
    width: 100%;
    border-radius: 0.8rem;
  }
  
  > .banner-content {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    
    > h1 {
      font-size: 4rem;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }
    
    > p {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
  
  @media (max-width: 768px) {
    > .banner-content {
      left: 5%;
      
      > h1 {
        font-size: 2.4rem;
      }
      
      > p {
        font-size: 1.2rem;
      }
    }
  }
`;