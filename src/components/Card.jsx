import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const ComponentCard = ({ name, description, price, image }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
                    ${price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary">
                    Añadir al carrito
                </Button>
            </CardActions>
        </Card>
    );
};

export default ComponentCard;
