import React from "react";
import { Grid, Typography, CardHeader,Card,CardMedia,CardContent } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
const pTime = video.snippet.publishTime;
const corrTime = "Publish Time: " + pTime.slice(0, 10)
return (
 <Grid item xs={12}>
    <Card variant="outlined" style={{cursor:'pointer' ,backgroundColor: "rgb(80,80,80)"}} onClick={() => onVideoSelect(video)}>
      <CardHeader title={video.snippet.title} titleTypographyProps={{variant:'h6' }} style={{ color:'rgb(252, 252, 252)', fontFamily:'calibri'}}
      subheader={corrTime}
    />
  <CardMedia component='img' src={video.snippet.thumbnails.medium.url} style = {{ height: 150}}/>
      <CardContent>
        <Typography style={{ color:'rgb(2,2,2)', fontFamily:'calibri'}}>
         <b>{video.snippet.description}</b>
        </Typography>
      </CardContent>
    </Card>
 </Grid>
  );
}

export default VideoItem;

