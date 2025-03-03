import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLeaf, FaCog, FaUserTie, FaClock, FaAward, FaMapMarkedAlt, FaHeadset } from 'react-icons/fa';
import ClientLogos from '../../components/ClientLogos';

const HeroSection = styled.section`
  height: calc(100vh - 80px);
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url('/images/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  padding: 0 20px;
  min-height: 500px;
  
  @media screen and (max-width: 480px) {
    padding: 0 15px;
    min-height: 400px;
  }
`;

const ServicesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 15px;
  }
`;
const DifferentialsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 15px;
  }
`;
const CoverageGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 15px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  background: #0066cc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background: #0052a3;
    transform: translateY(-2px);
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;
const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #003366;
    margin-bottom: 1rem;
  }

  p {
    color: #666666;
    line-height: 1.6;
  }
`;

const DifferentialsSection = styled(Section)`
  background: #f8faff;
`;

const DifferentialCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.08);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 102, 204, 0.12);
  }

  svg {
    font-size: 2.5rem;
    color: #0066cc;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #003366;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #666666;
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;
const CoverageSection = styled(Section)`
  background: #ffffff;
`;
const LocationCard = styled.div`
  background: linear-gradient(120deg, rgba(0, 102, 204, 0.05), rgba(0, 102, 204, 0.1));
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(120deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.15));
  }

  h4 {
    color: #003366;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #666666;
    font-size: 0.9rem;
  }
`;
const CTAButton = styled(Button)`
  margin-top: 3rem;
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 480px) {
    width: calc(100% - 30px);
    margin: 2rem auto 0;
  }
`;


function Home() {
  return (
    <main>
      <HeroSection>
        <HeroContent>
          <Title>Serviços de Limpeza e Portaria Profissional</Title>
          <Subtitle>
            Excelência em Limpeza e Portaria para Empresas e Condomínios.
            Qualidade e confiança em cada detalhe.
          </Subtitle>
          <Button to="/contato">Solicite um Orçamento</Button>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Nossos Serviços</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <h3>Limpeza Comercial</h3>
            <p>Serviços especializados para escritórios, lojas e empresas, mantendo seu ambiente sempre impecável.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Limpeza Residencial</h3>
            <p>Cuidamos da sua casa com toda atenção que ela merece, utilizando produtos de alta qualidade.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Portaria 24h</h3>
            <p>Controle de acesso e segurança para seu condomínio ou empresa com profissionais treinados.</p>
          </ServiceCard>
        </ServicesGrid>
      </Section>
      <DifferentialsSection>
        <SectionTitle>Inovação e Qualidade: O Que Nos Diferencia</SectionTitle>
        <DifferentialsGrid>
          <DifferentialCard>
            <FaLeaf />
            <h3>Produtos Sustentáveis</h3>
            <p>Utilizamos produtos ecológicos para garantir a segurança da sua família e do meio ambiente.</p>
          </DifferentialCard>
          <DifferentialCard>
            <FaCog />
            <h3>Equipamentos de Alta Tecnologia</h3>
            <p>Máquinas industriais para limpeza profunda, garantindo eficiência e rapidez.</p>
          </DifferentialCard>
          <DifferentialCard>
            <FaUserTie />
            <h3>Equipe Treinada e Certificada</h3>
            <p>Profissionais capacitados regularmente para oferecer o melhor serviço.</p>
          </DifferentialCard>
          <DifferentialCard>
            <FaClock />
            <h3>Atendimento Rápido</h3>
            <p>Solicite um orçamento de forma rápida e sem burocracia.</p>
          </DifferentialCard>
          <DifferentialCard>
            <FaAward />
            <h3>Garantia de Qualidade</h3>
            <p>Caso não fique satisfeito, realizamos um retrabalho sem custo adicional.</p>
          </DifferentialCard>
          <DifferentialCard>
            <FaHeadset />
            <h3>Atendimento 24/7 para Clientes Corporativos</h3>
            <p>Empresas e condomínios podem contar com suporte a qualquer momento para emergências ou demandas específicas.</p>
          </DifferentialCard>
        </DifferentialsGrid>
        <CTAButton to="/contato">Fale Conosco e Experimente a Diferença!</CTAButton>
      </DifferentialsSection>
      <ClientLogos />
      <CoverageSection>
        <SectionTitle>Onde Estamos? Nossa Cobertura de Serviços</SectionTitle>
        <CoverageGrid>
          <LocationCard>
            <FaMapMarkedAlt size={30} color="#0066cc" />
            <h4>São Paulo - Capital</h4>
            <p>Atendimento em toda região metropolitana</p>
          </LocationCard>
          <LocationCard>
            <FaMapMarkedAlt size={30} color="#0066cc" />
            <h4>Campinas e Região</h4>
            <p>Cobertura completa na região de Campinas</p>
          </LocationCard>
          <LocationCard>
            <FaMapMarkedAlt size={30} color="#0066cc" />
            <h4>Grande ABC</h4>
            <p>Santo André, São Bernardo e São Caetano</p>
          </LocationCard>
        </CoverageGrid>
        <CTAButton to="/contato">Precisa de Nossos Serviços? Consulte a Disponibilidade!</CTAButton>
      </CoverageSection>
    </main>
  );
}

export default Home;