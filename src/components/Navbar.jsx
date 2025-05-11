import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Divider } from 'primereact/divider';

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
        padding: '0.5rem 1rem'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          <i className="pi pi-globe" style={{ marginRight: '0.5rem' }}></i>
          Minha Empresa
        </div>

        <Button
          icon="pi pi-bars"
          className="p-button-text p-button-plain"
          onClick={() => setVisible(true)}
          aria-label="Abrir menu"
        />
      </div>

      {/* Sidebar do lado direito */}
      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
        showCloseIcon
        dismissable
        className="p-sidebar-sm"
        style={{ width: '13rem', transition: 'transform 0.3s ease-in-out' }}
      >
        <h2 className="p-mb-3">Navegação</h2>
        <Divider />
        <div className="p-d-flex p-flex-column" style={{ gap: '1rem' }}>
          <Button label="Menu" icon="pi pi-home" className="p-button-outlined p-button-secondary" style={{border: 'none', boxShadow: 'none', marginBottom: '1rem'}} onClick={() => navigateTo('/')} />
          <Button label="Sobre" icon="pi pi-info-circle" className="p-button-outlined p-button-secondary" style={{border: 'none', boxShadow: 'none', marginBottom: '1rem'}} onClick={() => navigateTo('/sobre')} />
          <Button label="Projetos" icon="pi pi-briefcase" className="p-button-outlined p-button-secondary" style={{border: 'none', boxShadow: 'none', marginBottom: '1rem'}} onClick={() => navigateTo('/projetos')} />
          <Button label="Equipe" icon="pi pi-users" className="p-button-outlined p-button-secondary" style={{border: 'none', boxShadow: 'none', marginBottom: '1rem'}} onClick={() => navigateTo('/equipe')} />
          <Button label="Contato" icon="pi pi-envelope" className="p-button-outlined p-button-secondary" style={{border: 'none', boxShadow: 'none'}} onClick={() => navigateTo('/contato')} />
        </div>
      </Sidebar>
    </>
  );
}
