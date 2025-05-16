import { useEffect, useState } from 'react';
import Teste from '../../images/teste.jpg';
import { Button } from 'primereact/button';
import './Home.css'; // cria este arquivo para o CSS

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Delay para iniciar animação
    setTimeout(() => setFadeIn(true), 300);
  }, []);

  return (
    <div className="home-container">
      <img src={Teste} alt="Imagem de fundo" className="home-background" />

      <div className={`home-overlay ${fadeIn ? 'visible' : ''}`}>
        <h1 className="home-title">Transformando espaços com propósito</h1>
        <p className="home-subtitle">Arquitetura e paisagismo que inspiram.</p>
      </div>
    </div>
  );
}
