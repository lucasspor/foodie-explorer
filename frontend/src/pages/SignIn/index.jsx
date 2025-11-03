import { useState } from 'react';
import { Container, Form, Logo } from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { signIn } = useAuth();
  
  function handleSignIn() {
    if (!email || !password) {
      return alert("Preencha todos os campos!");
    }
    
    setLoading(true);
    
    signIn({ email, password })
      .finally(() => setLoading(false));
  }
  
  return (
    <Container>
      <Logo>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
        </svg>
        <h1>food explorer</h1>
      </Logo>
      
      <Form>
        <h2>Faça login</h2>
        
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <Input 
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        
        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <Input 
            id="password"
            placeholder="No mínimo 6 caracteres" 
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        
        <Button 
          title={loading ? "Entrando" : "Entrar"}
          onClick={handleSignIn}
          disabled={loading}
        />
        
        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  );
}