import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const MultiActionAreaCard = (props) => {
  const { apiData } = props;

  let property = [];
  if (apiData && apiData.length > 0) {
    property = apiData[0];
  }

  return (
      <Card sx={{ maxWidth: 345 }} style={{ margin: "9px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={property.imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {property.propertyTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {property.description}
            </Typography>
            <Typography
              variant="h9"
              component="div"
              style={{ marginTop: "5%" }}
              color="text.secondary"
            >
              Owner:- {property.ownerFirstName} {property.ownerLastName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            More Info
          </Button>
        </CardActions>
      </Card>
  );
};

export default MultiActionAreaCard;
