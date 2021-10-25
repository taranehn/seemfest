import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(() => ({
  content: {
    backgroundColor: '#D0D0D0',
  },
  action: {
    backgroundColor: '#D0D0D0',
  },
  button: {
  },
}));


interface EventCardProps {
  image: string;
  title: string;
  description1: string;
  description2: string;
}

export default function EventCard({ image, title, description1, description2 }: EventCardProps) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={image}
      />
      <CardContent className={classes.content} >
        <Typography color="text.primary" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {description1}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {description2}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button color="secondary" className={classes.button} size="small">
          <FormattedMessage id="more" />
        </Button>
        <Button color="secondary" size="small">
          <FormattedMessage id="tickets" />
        </Button>
      </CardActions>
    </Card>
  );
}
