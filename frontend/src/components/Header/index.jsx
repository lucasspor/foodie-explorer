import { Container, Logo, Search, Profile, Logout, Brand } from './styles';
import { FiSearch, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';

export function Header({ search, setSearch }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleOrders() {
    navigate("/orders");
  }

  function handleNewDish() {
    navigate("/new");
  }

  function handleHome() {
    navigate("/");
  }

  return (
    <Container>
      <Brand>
        <Logo onClick={handleHome}>
          <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
          </svg>
          <h1>food explorer</h1>
        </Logo>
      </Brand>

      <Search>
        <Input 
          placeholder="Busque por pratos ou ingredientes" 
          type="text"
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </Search>

      {
        user.isAdmin ?
        <Button 
          title="Novo prato"
          onClick={handleNewDish}
        /> :
        <Button 
          title="Pedidos"
          icon={FiShoppingCart}
          onClick={handleOrders}
        />
      }

      <Profile>
        <Logout onClick={handleSignOut}>
          <FiLogOut />
        </Logout>
      </Profile>
    </Container>
  );
}