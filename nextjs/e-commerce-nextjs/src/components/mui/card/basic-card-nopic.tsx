import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface BasicCardProps {
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const BasicCard: React.FC<BasicCardProps> = ({
  backgroundColor = "#f0f4ff",
  textColor = "#1e293b",
  title = "Word of the Day",
  subtitle = "adjective",
  description = 'well meaning and kindly.\n"a benevolent smile"',
  buttonLabel = "Learn More",
  onButtonClick,
}) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card sx={{ backgroundColor, color: textColor }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: textColor, fontSize: 14 }}>
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ color: textColor, mb: 1.5 }}>
            {subtitle}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onButtonClick}>{buttonLabel}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BasicCard;