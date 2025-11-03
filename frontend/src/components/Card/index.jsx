import { Container, Content, FoodImage } from './styles';
import { FiHeart, FiEdit } from 'react-icons/fi';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function Card({ data }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  function handleDetails() {
    navigate(`/details/${data.id}`);
  }
  
  function handleEdit() {
    navigate(`/edit/${data.id}`);
  }
  
  return (
    <Container>
      {
        user.isAdmin ?
        <FiEdit 
          className="edit"
          onClick={handleEdit}
        /> :
        <FiHeart className="favorite" />
      }
      
      <Content>
        <FoodImage>
          <img 
            src={`${api.defaults.baseURL}/files/${data.image}`} 
            alt={data.title} 
          />
        </FoodImage>
        
        <h3 onClick={handleDetails}>{data.title} &gt;</h3>
        <p>{data.description}</p>
        <span>R$ {data.price}</span>
        
        {
          !user.isAdmin &&
          <div className="buttons">
            <Button title="incluir" />
          </div>
        }
      </Content>
    </Container>
  );
}