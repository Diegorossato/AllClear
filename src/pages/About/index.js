import React from 'react';
import styled from 'styled-components';
import { FaHistory, FaHandshake, FaIndustry, FaTools, FaAward, FaUsers } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: clamp(3rem, 6vw, 6rem) 20px;
  background: linear-gradient(to bottom, #ffffff, #f8faff);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  color: #003366;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 1.5rem;

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

const Section = styled.div`
  margin-bottom: clamp(3rem, 6vw, 6rem);
  padding: clamp(1.5rem, 3vw, 2rem);
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 480px) {
    padding: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding: 1rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const Card = styled.div`
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

  @media screen and (max-width: 480px) {
    padding: 1.2rem;
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

const List = styled.ul`
  list-style: none;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: 2rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  li {
    color: #444;
    padding: clamp(1rem, 2vw, 1.2rem) 1.5rem;
    background: linear-gradient(145deg, #ffffff, #f8faff);
    border-radius: 12px;
    display: flex;
    align-items: center;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    box-shadow: 0 4px 15px rgba(0, 102, 204, 0.06);
    border: 1px solid rgba(0, 102, 204, 0.08);
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(5px);
      background: linear-gradient(145deg, #f8faff, #ffffff);
      box-shadow: 0 6px 20px rgba(0, 102, 204, 0.1);
      border-color: rgba(0, 102, 204, 0.15);
    }

    &:before {
      content: '•';
      color: #0066cc;
      font-weight: bold;
      margin-right: 15px;
      font-size: 1.5rem;
    }
  }
`;

const SectionTitle = styled.h2`
  color: #0066cc;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    background: linear-gradient(120deg, #0066cc, #66b3ff);
    padding: 0.5rem;
    border-radius: 12px;
    color: white;
  }
`;

const HistoryText = styled.p`
  line-height: 2;
  color: #555;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  text-align: justify;
  padding: 0 1rem;
`;



function About() {
  return (
    <AboutContainer>
      <Title>Sobre a AllClear</Title>
      
      <Section>
        <SectionTitle>
          <FaHistory /> História & Experiência
        </SectionTitle>
        <HistoryText>
        A All Clear Serviços Profissionais nasceu da vasta experiência de seus sócios, que acumulam quase 30 anos de atuação no setor de terceirização. 
        Durante essa trajetória, atenderam empresas de todos os portes, de pequenas e médias companhias a grandes corporações, além de instituições públicas.
        Ao longo dos anos, perceberam que o mercado carecia de uma abordagem mais moderna e estratégica, capaz de alinhar eficiência operacional, redução de custos e excelência na execução dos serviços. 
        Assim, decidiram fundar a All Clear, uma empresa que vai além do modelo tradicional de terceirização, oferecendo soluções personalizadas e gestão próxima para garantir a máxima satisfação de seus clientes.
        Acreditamos que cada empresa tem suas próprias demandas e desafios. Por isso, nossa atuação é pautada na flexibilidade e inovação, entregando projetos sob medida para cada parceiro. 
        Com um time altamente qualificado e comprometido, buscamos não apenas prestar um serviço, mas transformar a experiência de terceirização em um diferencial estratégico para os nossos clientes.
        </HistoryText>
      </Section>

      <Section>
        <SectionTitle>
          <FaHandshake /> Nosso Diferencial
        </SectionTitle>
        <Grid>
          <Card>
            <h3>Gestão Transparente</h3>
            <p>Adotamos uma gestão próxima e transparente, fortalecendo a confiança e construindo relações duradouras com clientes, parceiros e colaboradores.</p>
          </Card>
          <Card>
            <h3>Custo-Benefício</h3>
            <p>Garantimos a redução de custos sem comprometer a qualidade, por meio de processos otimizados e eficientes.</p>
          </Card>
          <Card>
            <h3>Soluções Personalizadas</h3>
            <p>Criamos soluções personalizadas para atender às necessidades específicas de cada cliente, assegurando máxima eficiência e qualidade.</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>
          <FaIndustry /> Setores Atendidos
        </SectionTitle>
        <List>
        <li>Empresas de todos os portes</li>
        <li>Indústrias diversas</li>
        <li>Comércio (atacado e varejo)</li>
        <li>Instituições públicas</li>
        <li>Setor de saúde</li>
        <li>Shopping centers</li>
        <li>Hotéis e resorts</li>
        <li>Condomínios residenciais e comerciais</li>
        <li>Escolas e universidades</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>
          <FaTools /> Serviços Especializados
        </SectionTitle>
        <Grid>
          <Card>
            <h3>Limpeza Pós-obra</h3>
            <p>Remoção especializada de resíduos e acabamento detalhado para ambientes recém-construídos ou reformados.</p>
          </Card>
          <Card>
            <h3>Limpeza Fina</h3>
            <p>Higienização minuciosa para ambientes de alto padrão, com atenção aos mínimos detalhes.</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>
          <FaAward /> Compromisso AllClear
        </SectionTitle>
        <Grid>
          <Card>
            <h3>Excelência</h3>
            <p>Comprometimento com a qualidade, eficiência e confiabilidade em todos os serviços prestados.</p>
          </Card>
          <Card>
            <h3>Relacionamento</h3>
            <p>Construção e manutenção de relacionamentos sólidos e próximos com nossos clientes.</p>
          </Card>
          <Card>
            <h3>Inovação</h3>
            <p>Utilização de tecnologia e práticas inovadoras para aprimoramento contínuo dos serviços.</p>
          </Card>
          <Card>
            <h3>Capacitação</h3>
            <p>Investimento em treinamento contínuo de nossa equipe para garantir a excelência no atendimento.</p>
          </Card>
          <Card>
            <h3>Sustentabilidade</h3>
            <p>Compromisso com práticas ecológicas e sustentáveis, minimizando impactos ambientais e promovendo o bem-estar social.</p>
          </Card>
          <Card>
            <h3>Agilidade</h3>
            <p>Entrega de soluções rápidas e eficientes, atendendo às necessidades de nossos clientes de forma pontual e assertiva.</p>
          </Card>
        </Grid>
      </Section>
    </AboutContainer>
  );
}

export default About;