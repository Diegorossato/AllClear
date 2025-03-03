import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBroom, FaBuilding, FaUserShield, FaTools, FaIndustry, FaHome, FaLeaf, FaChartLine, FaHandshake, FaCog } from 'react-icons/fa';

const ServicesContainer = styled.div`
  margin: 80px auto 0;
  padding: clamp(4rem, 6vw, 6rem) 20px;
  background: linear-gradient(to bottom, #ffffff, #f8faff);
`;

const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
  text-align: center;
  padding: 0 clamp(1rem, 3vw, 2rem);
`;

const Title = styled.h1`
  text-align: center;
  color: #003366;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(60px, 8vw, 80px);
    height: 4px;
    background: linear-gradient(to right, #0066cc, #66b3ff);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  padding: clamp(1rem, 2vw, 2rem) 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 15px;
  }
`;

const ServiceCard = styled.div`
  background: #ffffff;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 102, 204, 0.1);

  @media screen and (max-width: 480px) {
    padding: 1.2rem;
    transform: none !important;
  }

  h3 {
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 102, 204, 0.12);
    border-color: rgba(0, 102, 204, 0.2);
  }

  h3 {
    color: #003366;
    margin-bottom: 1.2rem;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    font-weight: 700;
  }

  p {
    color: #666;
    line-height: 1.8;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    color: #555;
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    font-size: clamp(0.9rem, 2vw, 1rem);

    &:before {
      content: '•';
      color: #0066cc;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const BenefitsSection = styled.section`
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const BenefitCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8faff);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 102, 204, 0.08);
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 102, 204, 0.1);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 102, 204, 0.12);
    border-color: rgba(0, 102, 204, 0.2);
  }

  h3 {
    color: #003366;
    margin-bottom: 1.2rem;
    font-size: clamp(1.2rem, 2.5vw, 1.4rem);
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  p {
    color: #555;
    line-height: 1.8;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
  }

  svg {
    font-size: 2.8rem;
    color: #0066cc;
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const CTASection = styled.section`
  max-width: 800px;
  margin: 5rem auto 0;
  text-align: center;
  padding: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(145deg, #ffffff, #f8faff);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 102, 204, 0.08);

  @media screen and (max-width: 480px) {
    margin: 3rem auto 0;
    padding: 1.5rem;
  }
`;

const CTATitle = styled.h2`
  color: #003366;
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2.5rem);
  font-size: clamp(0.9rem, 2vw, 1.1rem);

  @media screen and (max-width: 480px) {
    width: calc(100% - 30px);
    text-align: center;
    margin: 1rem auto;
  }
`;

function Services() {
  return (
    <ServicesContainer>
      <HeroSection>
        <Title>Nossos Serviços</Title>
        <Subtitle>
          Oferecemos soluções completas em limpeza e portaria, com profissionais
          altamente capacitados e equipamentos de última geração para atender
          todas as suas necessidades.
        </Subtitle>
      </HeroSection>

      <ServicesGrid>
        <ServiceCard>
          <FaBroom />
          <h3>Limpeza Comercial</h3>
          <p>Serviços especializados para manter seu ambiente comercial impecável e profissional.</p>
          <ul>
            <li>Limpeza diária de escritórios</li>
            <li>Higienização de áreas comuns</li>
            <li>Limpeza de vidros e fachadas</li>
            <li>Tratamento de pisos</li>
          </ul>
        </ServiceCard>

        <ServiceCard>
          <FaBuilding />
          <h3>Limpeza Condominial</h3>
          <p>Soluções completas para condomínios residenciais e comerciais.</p>
          <ul>
            <li>Limpeza de áreas comuns</li>
            <li>Manutenção de jardins</li>
            <li>Limpeza de garagens</li>
            <li>Coleta seletiva de resíduos</li>
          </ul>
        </ServiceCard>

        <ServiceCard>
          <FaUserShield />
          <h3>Serviços de Portaria</h3>
          <p>Controle de acesso e segurança 24 horas para sua tranquilidade.</p>
          <ul>
            <li>Portaria 24 horas</li>
            <li>Controle de acesso</li>
            <li>Monitoramento de câmeras</li>
            <li>Ronda programada</li>
          </ul>
        </ServiceCard>

        <ServiceCard>
          <FaTools />
          <h3>Limpeza Pós-obra</h3>
          <p>Limpeza especializada para ambientes recém-construídos ou reformados.</p>
          <ul>
            <li>Remoção de resíduos de construção</li>
            <li>Limpeza de acabamentos</li>
            <li>Remoção de manchas</li>
            <li>Limpeza pesada especializada</li>
          </ul>
        </ServiceCard>

        <ServiceCard>
          <FaIndustry />
          <h3>Limpeza Industrial</h3>
          <p>Serviços especializados para ambientes industriais e fábricas.</p>
          <ul>
            <li>Limpeza de áreas produtivas</li>
            <li>Limpeza técnica especializada</li>
            <li>Higienização de equipamentos</li>
            <li>Gestão de resíduos industriais</li>
          </ul>
        </ServiceCard>

        <ServiceCard>
          <FaHome />
          <h3>Limpeza Residencial</h3>
          <p>Serviços personalizados para sua casa ou apartamento.</p>
          <ul>
            <li>Limpeza geral</li>
            <li>Higienização de ambientes</li>
            <li>Limpeza de móveis e estofados</li>
            <li>Limpeza de vidros e janelas</li>
          </ul>
        </ServiceCard>
      </ServicesGrid>

      <BenefitsSection>
        <Title>Benefícios</Title>
        <BenefitsGrid>
          <BenefitCard>
            <FaChartLine />
            <h3>Eficiência</h3>
            <p>Aumente a produtividade do seu ambiente com limpeza regular e eficaz.</p>
          </BenefitCard>
          <BenefitCard>
            <FaLeaf />
            <h3>Sustentabilidade</h3>
            <p>Utilizamos produtos e práticas eco-friendly para preservar o meio ambiente.</p>
          </BenefitCard>
          <BenefitCard>
            <FaHandshake />
            <h3>Confiabilidade</h3>
            <p>Nossos serviços são executados com alta qualidade, buscando sempre superar as expectativas.</p>
          </BenefitCard>
          <BenefitCard>
            <FaCog />
            <h3>Personalização</h3>
            <p>Adaptamos nossos serviços de acordo com as necessidades de cada cliente, proporcionando uma experiência única.</p>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>

      <CTASection>
        <CTATitle>Solicite um Orçamento</CTATitle>
        <CTAButton to="/contato">Fale Conosco</CTAButton>
      </CTASection>
    </ServicesContainer>
  );
}

export default Services;