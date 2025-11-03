import React from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Novo Prato</h1>
        <p>Esta página será implementada em breve.</p>
      </main>
      <Footer />
    </Container>
  );
}