import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { blueGrey, orange } from '@mui/material/colors';

const listoneAd = ({ad}) => {
  return (
    <div>
       <Card sx={{ width: 250 , marginLeft: 10 ,marginTop: 10, backgroundColor : orange[200]}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ad.imageurl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ad.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {ad.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={`/ads/${ad.idads}`} style={{color:"white",listStyle:"none",textDecoration:"none"}}>Learn More</Link></Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default listoneAd
