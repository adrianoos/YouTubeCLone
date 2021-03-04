import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`; // fetch using earlier fetched video ids
  const pTime = video.snippet.publishTime;
  const corrTime = "Publish Time: " + pTime.slice(0, 10)

  return (
    <React.Fragment>
       <Paper elevation={6} style={{ height: "22%", width: "85%"}}>
          <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
          />
        </Paper>
        <Paper elevation={6} style={{ padding: "15px", width: "81.6%", height: "15%",backgroundColor:'rgb(80,80,80)'}}>
         <Typography variant="h4" style={{color:'rgb(252,252,252)'}}>
          {video.snippet.title} - {video.snippet.channelTitle}
         </Typography>
         <Typography variant="subtitle1" style={{color:'rgb(2,2,2)'}}>
          {video.snippet.channelTitle}
         </Typography>
         <Typography variant="subtitle2" style={{color:'rgb(2,2,2)'}}>{video.snippet.description}</Typography>
         <Typography variant="subtitle1" style={{color:'rgb(252,252,252)'}}>
          {corrTime}
         </Typography>
        </Paper>
    </React.Fragment>
  );
}

export default VideoDetail;