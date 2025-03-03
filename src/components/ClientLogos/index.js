import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSection = styled.section`
  padding: 5rem 0;
  background: #ffffff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 3rem;
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    text-align: center;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 102, 204, 0.15);
    z-index: 1;
    transition: all 0.3s ease;

    &:hover {
      background: #f8faff;
      box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
    }

    &::before {
      color: #0066cc;
      font-size: 24px;
      opacity: 1;
    }
  }

  .slick-prev {
    left: -20px;
  }

  .slick-next {
    right: -20px;
  }

  .slick-dots {
    bottom: -40px;

    li button::before {
      font-size: 10px;
      color: #0066cc;
      opacity: 0.3;
    }

    li.slick-active button::before {
      opacity: 1;
    }
  }
`;

const LogoWrapper = styled.div`
  padding: 0 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  a {
    display: block;
    text-decoration: none;
  }

  img {
    max-width: 180px;
    height: auto;
    margin: 0 auto;
    filter: grayscale(100%);
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

const ClientLogos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    accessibility: true,
    aria: {
      carousel: true,
    },
  };

  const clients = [
    { name: 'Padtec', logo: '/images/clients/logo-padtec.png', website: 'https://www.padtec.com.br' },
    { name: 'Sensedia', logo: '/images/clients/logo-sensedia.png', website: 'https://www.sensedia.com' },
    { name: 'GattoMatto', logo: '/images/clients/gatomato-logo.png', website: 'https://www.instagram.com/gattomattotattoo/' },
    { name: 'Mercure', logo: '/images/clients/mercure-logo.png', website: 'https://mercure.accor.com/pt-br.html' },
    { name: 'Ekinops', logo: '/images/clients/logo-ekinops.png', website: 'https://www.ekinops.com/' },
    { name: 'ChefTime', logo: '/images/clients/logo-cheftime.png', website: 'https://chefetime.com.br/' },
    { name: 'Viracopos', logo: '/images/clients/Viracopos_Airport_Logo.png', website: 'https://www.viracopos.com/pt_br/passageiro/' },
    { name: 'Barros', logo: '/images/clients/logo-barros.png', website: 'https://www.barrospimentel.com.br/site/' },
    { name: 'Palmeiral', logo: '/images/clients/palmeiral-logo.png', website: 'https://palmeiral.com.br/' },
    { name: 'Madero', logo: '/images/clients/madero-logo.png', website: 'https://www.restaurantemadero.com.br/pt' },
  ];

  return (
    <CarouselSection>
      <SectionTitle>Nossos Clientes</SectionTitle>
      <CarouselContainer>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <LogoWrapper key={index}>
              <a href={client.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                />
              </a>
            </LogoWrapper>
          ))}
        </Slider>
      </CarouselContainer>
    </CarouselSection>
  );
};

export default ClientLogos;