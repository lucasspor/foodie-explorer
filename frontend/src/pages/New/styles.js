import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas: 
    "header"
    "content"
    "footer";
  
  height: 100vh;
  
  main {
    grid-area: content;
    padding: 3.2rem;
    max-width: 112rem;
    margin: 0 auto;
    width: 100%;
  }
`;