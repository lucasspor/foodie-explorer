import React from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Orders() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Meus Pedidos</h1>
        <p>Esta página será implementada em breve.</p>
      </main>
      <Footer />
    </Container>
  );
}