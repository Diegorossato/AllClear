import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 4rem 20px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Form = styled.form`
  background: #ffffff;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 102, 204, 0.08);

  @media screen and (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #003366;
    font-weight: 600;
    font-size: clamp(0.9rem, 2vw, 1rem);
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: clamp(0.6rem, 2vw, 0.8rem);
    border: 2px solid #e1e8f0;
    border-radius: 8px;
    font-size: clamp(0.9rem, 2vw, 1rem);
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 1rem;

    input,
    select,
    textarea {
      font-size: 16px; /* Prevents zoom on mobile */
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: clamp(0.8rem, 2vw, 1rem);
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  background: #0066cc;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0052a3;
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: #003366;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
`;

const SecondaryActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8faff);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 102, 204, 0.08);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #333;

  svg {
    font-size: 1.5rem;
    color: #0066cc;
    margin-right: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: #003366;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;



const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(120deg, rgba(0, 102, 204, 0.1), rgba(0, 102, 204, 0.15));
  color: #0066cc;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(120deg, rgba(0, 102, 204, 0.15), rgba(0, 102, 204, 0.2));
    transform: translateY(-2px);
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(120deg, #d4edda, #c3e6cb);
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          address: formData.address,
          message: formData.message,
          to_email: 'contato@allclear.com.br'
        },
        'YOUR_PUBLIC_KEY'
      );

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        address: '',
        message: ''
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <Title>Entre em Contato</Title>
      <Subtitle>
        Estamos aqui para ajudar! Entre em contato conosco para solicitar um orçamento,
        tirar dúvidas ou agendar nossos serviços de limpeza. Nossa equipe está pronta
        para atendê-lo com eficiência e cuidado.
      </Subtitle>

      <ContactGrid>
        <ContactInfo>
          <InfoItem>
            <FaPhone />
            <div>
              <h3>Telefone</h3>
              <p>(19) 3888-2037</p>
            </div>
          </InfoItem>
          <InfoItem>
            <FaEnvelope />
            <div>
              <h3>E-mail</h3>
              <p>contato@allclear.com.br</p>
            </div>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt />
            <div>
              <h3>Endereço</h3>
              <p>Campinas, SP</p>
            </div>
          </InfoItem>
        </ContactInfo>

        <Form onSubmit={handleSubmit}>
          {showSuccess && (
            <SuccessMessage>
              Obrigado por entrar em contato! Retornaremos em breve.
            </SuccessMessage>
          )}

          <FormGroup>
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="phone">Telefone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="service">Tipo de Serviço*</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="residencial">Limpeza Residencial</option>
              <option value="comercial">Limpeza Comercial</option>
              <option value="pos-obra">Limpeza Pós-Obra</option>
              <option value="industrial">Limpeza Industrial</option>
              <option value="condominial">Limpeza Condominial</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="address">Endereço (opcional)</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Mensagem*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </SubmitButton>
        </Form>
      </ContactGrid>

      <SecondaryActions>
        <SecondaryButton to="/servicos">
          Conheça Nossos Serviços <FaArrowRight />
        </SecondaryButton>
      </SecondaryActions>
    </ContactContainer>
  );
}

export default Contact;