import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export interface OutlinedCardProps {
  borderColor?: string;
  borderWidth?: number;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const OutlinedCard: React.FC<OutlinedCardProps> = ({
  borderColor = "#1976d2",
  borderWidth = 2,
  title = "Word of the Day",
  subtitle = "adjective",
  description = 'well meaning and kindly.\n"a benevolent smile"',
  buttonLabel = "Learn More",
  onButtonClick,
}) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          borderColor: borderColor,
          borderWidth: borderWidth,
          borderStyle: "solid",
        }}
      >
        <CardContent>
          <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
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

export default OutlinedCard;