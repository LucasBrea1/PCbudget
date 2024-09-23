import React from 'react';
import { Container, Grid } from '@mui/material';
import ComponentCard from '../components/Card';


const Home = () => {
  const components = [
      {
          id: 1,
          name: "Procesador Intel i9",
          description: "Procesador de 10ª generación con 8 núcleos para máximo rendimiento.",
          price: 450,
          image: "https://mla-s1-p.mlstatic.com/680141-MLU70044600734_062023-F.jpg",
      },
      {
          id: 2,
          name: "Tarjeta Gráfica NVIDIA RTX 3080",
          description: "Gráficos avanzados para gaming y creación de contenido.",
          price: 799,
          image: "https://dlcdnwebimgs.asus.com/gain/03dcc29d-2fe4-4ba3-8621-75a6eae4dcca/w800  ",
      },
      {
          id: 3,
          name: "Memoria RAM Corsair 16GB",
          description: "Velocidad DDR4 para un rendimiento óptimo.",
          price: 120,
          image: "https://gorilagames.com/img/Public/1019/58397-producto-ram-corsair-16gb-8gb-3200mhz-vengeance-pro-rgb-gorila-games-3.jpg",
      }
  ];

  return (
      <Container>
          <Grid container spacing={2} justifyContent="center">
              {components.map((component, index) => (
                  <Grid item key={component.id}>
                      <ComponentCard
                          id={component.id}
                          name={component.name}
                          description={component.description}
                          price={component.price}
                          image={component.image}
                      />
                  </Grid>
              ))}
          </Grid>
      </Container>
  );
};

export default Home;
