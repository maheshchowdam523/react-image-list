import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

interface props {
    car: any
}
export const Car: React.FC<props> = ({ car }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={car.imageUrl}
                alt={car.MakeName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {car.MakeName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {car.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}