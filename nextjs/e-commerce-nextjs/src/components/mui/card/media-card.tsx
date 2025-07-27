import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface MediaCardProps {
  image?: string;
  imageHeight?: number;
  title?: string;
  description?: string;
  button1Label?: string;
  button2Label?: string;
  onButton1Click?: () => void;
  onButton2Click?: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({
  image = "https://picsum.photos/seed/picsum/200/300",
  imageHeight = 140,
  title = "Lizard",
  description = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  button1Label = "Share",
  button2Label = "Learn More",
  onButton1Click,
  onButton2Click,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: imageHeight }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onButton1Click}>{button1Label}</Button>
        <Button size="small" onClick={onButton2Click}>{button2Label}</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;