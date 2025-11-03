import { useState, useEffect } from 'react';
import { Container, Content, DishImage, Description, Ingredients } from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { FiChevronLeft } from 'react-icons/fi';

export function Details() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  
  const params = useParams();
  const navigate = useNavigate();
  
  function handleBack() {
    navigate(-1);
  }
  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }
    
    fetchDish();
  }, [params.id]);
  
  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      
      {
        data &&
        <Content>
          <button onClick={handleBack}>
            <FiChevronLeft />
            voltar
          </button>
          
          <main>
            <DishImage>
              <img 
                src={`${api.defaults.baseURL}/files/${data.image}`} 
                alt={data.title} 
              />
            </DishImage>
            
            <Description>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              
              {
                data.ingredients &&
                <Ingredients>
                  {
                    data.ingredients.map(ingredient => (
                      <div key={String(ingredient.id)} className="ingredient">
                        <span>{ingredient.name}</span>
                      </div>
                    ))
                  }
                </Ingredients>
              }
              
              <div className="order">
                <span>R$ {data.price}</span>
                <Button title="Incluir" />
              </div>
            </Description>
          </main>
        </Content>
      }
      
      <Footer />
    </Container>
  );
}