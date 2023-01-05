import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
import { Link, Routes, Route } from "react-router-dom";
import CardDetails from "./CardDetails";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const BasicCard = (e) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <a href={e.url}>
              <b>{e.title}</b>
            </a>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            By {e.author}
          </Typography>
          <Typography variant="body2">{e.num_comments} comments</Typography>

          <Link to={`/news/${e.objectID}`}>Details</Link>
          {/* <Routes>
            <Route path="/card" element={<Card />} />
            <Route path="/carddetails/:objectID" element={<CardDetails element={e}/>} />
          </Routes> */}

        </CardContent>
      </Card>
    </div>
  );
};
export default BasicCard;
