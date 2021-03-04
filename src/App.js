import React from "react";
import { Grid } from "@material-ui/core";
import axios from 'axios';
import './index.css';

import { SearchBar, VideoList, VideoDetail } from "./components";

const KEY = 'AIzaSyBIRMchRfnsrA8Pt1dyRyuI5sPH61IjcZ0' // Api key for authorazation


class App extends React.Component {
state = {
videos: [],
selectedVideo: null
};
  
componentDidMount() {
this.handleSubmit('Kitesurfing')
};

onVideoSelect = (video) => {
  this.setState({selectedVideo: video})
  
}

  handleSubmit = async (searchTerm) => { // fetching data with axios
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      maxResult: 5,
      key: KEY,
      q: searchTerm,
    },
  });

  this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
};

render(){
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <SearchBar handleSubmit={this.handleSubmit} />
          </Grid>
          <Grid item xs={8} spacing={2}>
            <VideoDetail video={this.state.selectedVideo} />
          </Grid>
          <Grid item xs={4} spacing={2}>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  }
  }



export default App;
