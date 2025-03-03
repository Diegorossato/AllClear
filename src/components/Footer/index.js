import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #003366;
  color: #ffffff;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #ffffff;
  }
  p {
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  
  svg {
    margin-right: 10px;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #66b3ff;
  }

  &:focus {
    outline: 2px solid #66b3ff;
    outline-offset: 2px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #66b3ff;
    }

    &:focus {
      outline: 2px solid #66b3ff;
      outline-offset: 2px;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer role="contentinfo" aria-label="Rodapé do site">
      <FooterContent>
        <FooterSection>
          <h3>Sobre a AllClear</h3>
          <p>
            Empresa especializada em serviços de limpeza e portaria, 
            comprometida com a excelência e satisfação dos clientes.
          </p>
          <SocialLinks aria-label="Links de redes sociais">
            <a href="https://facebook.com/allclear" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/allclear" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/company/allclear" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/5511912345678" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
              <FaWhatsapp />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Links Rápidos</h3>
          <nav aria-label="Links rápidos do rodapé">
            <FooterLink to="/sobre">Sobre Nós</FooterLink>
            <FooterLink to="/servicos">Nossos Serviços</FooterLink>
            <FooterLink to="/contato">Contato</FooterLink>
          </nav>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <address>
            <ContactInfo>
              <FaPhone aria-hidden="true" /> <span>(19) 3888-2037</span>
            </ContactInfo>
            <ContactInfo>
              <FaEnvelope aria-hidden="true" /> <span>contato@allclearbrasil.com.br</span>
            </ContactInfo>
            <ContactInfo>
              <FaMapMarkerAlt aria-hidden="true" /> <span>Campinas, SP</span>
            </ContactInfo>
          </address>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <p>&copy; {new Date().getFullYear()} AllClear. Todos os direitos reservados.
        <br />                
            Desenvolvido por Diego Geraldo</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;