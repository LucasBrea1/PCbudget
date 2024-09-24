import React from 'react';
import { Container, Grid } from '@mui/material';
import ComponentCard from '../components/Card';
import { Components } from '../assets/Components';


const Home = () => {
  return (
      <Container>
          <Grid container spacing={2} justifyContent="center">
              {Components.map((component, index) => (
                  <Grid item key={component.id} xs={12} sm={6} md={4} lg={3}>
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
