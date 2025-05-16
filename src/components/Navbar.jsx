import { Sidebar } from 'primereact/sidebar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Divider } from 'primereact/divider';
import Menu from '../images/menu.png'

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
    setVisible(false);
  };

  return (
    <>
      {/* Top navbar com logo à esquerda e menu à direita */}
      <div className="p-shadow-2" style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'var(--surface-0)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}>
        <span
          onClick={() => navigateTo('/')}
          style={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            cursor: 'pointer',
            color: '#393d3f',
            transition: 'color 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#d4a373')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#393d3f')}
        >
          maann | arquitetura e paisagismo
        </span>


        <span
          onClick={() => setVisible(true)}
          style={{
            cursor: 'pointer',
            fontSize: '2rem',
            color: '#595959',
            fontWeight: '500',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#d4a373')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#595959')}
        >
          <img src={Menu} style={{height: '23px', width: '23px'}}/>
        </span>

      </div>

      {/* Sidebar do lado direito */}
      <div className="card flex justify-content-center">
        <Sidebar
          visible={visible}
          position="right"
          onHide={() => setVisible(false)}
          style={{ width: '14rem', transition: 'transform 0.3s ease-in-out' }}
        >
          <h1 style={{color:'#393d3f'}}>Navegação</h1>

          <Divider />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
            {[
              { label: 'Sobre', path: '/sobre' },
              { label: 'Projetos', path: '/projetos' },
              { label: 'Equipe', path: '/equipe' },
              { label: 'Contato', path: '/contato' },
            ].map((item, index) => (
              <span
                key={index}
                onClick={() => navigateTo(item.path)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: '#595959',
                  fontWeight: '500',
                  transition: 'color 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#d4a373';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#595959';
                }}
              >
                {item.label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    height: '2px',
                    width: '0%',
                    backgroundColor: 'var(--primary-400)',
                    transition: 'width 0.3s ease-in-out',
                  }}
                  className="underline-hover"
                />
              </span>
            ))}
          </div>

        </Sidebar>
      </div>
    </>
  );
}
