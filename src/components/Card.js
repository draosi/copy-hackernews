import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Card.css'

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const BasicCard = ({ title, author, url, num_comments}) => {
return(
  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        <a href={url}><b>{title}</b></a>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          By {author}
        </Typography>
        <Typography variant="body2">
          {num_comments} comments
        </Typography>
      </CardContent>
    </Card>
)}
export default BasicCard;
