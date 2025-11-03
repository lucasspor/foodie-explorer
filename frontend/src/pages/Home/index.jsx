import { useState, useEffect } from 'react';
import { Container, Content, Banner } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { api } from '../../services/api';

import bannerImg from '../../assets/banner.svg';

export function Home() {
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }
    
    fetchDishes();
  }, [search]);
  
  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      
      <Content>
        <Banner>
          <img src={bannerImg} alt="Imagem de macarons coloridos" />
          
          <div className="banner-content">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>
        
        <section>
          <h2>Pratos principais</h2>
          
          <div className="cards">
            {
              dishes.filter(dish => dish.category === "refeição").map(dish => (
                <Card 
                  key={String(dish.id)}
                  data={dish}
                />
              ))
            }
          </div>
        </section>
        
        <section>
          <h2>Sobremesas</h2>
          
          <div className="cards">
            {
              dishes.filter(dish => dish.category === "sobremesa").map(dish => (
                <Card 
                  key={String(dish.id)}
                  data={dish}
                />
              ))
            }
          </div>
        </section>
        
        <section>
          <h2>Bebidas</h2>
          
          <div className="cards">
            {
              dishes.filter(dish => dish.category === "bebida").map(dish => (
                <Card 
                  key={String(dish.id)}
                  data={dish}
                />
              ))
            }
          </div>
        </section>
      </Content>
      
      <Footer />
    </Container>
  );
}