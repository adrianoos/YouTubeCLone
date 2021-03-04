import React from "react";
import { Paper, TextField } from "@material-ui/core";


class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    };
  
  handleChange = (event) => this.setState({searchTerm: event.target.value});

  handleSubmit(searchTerm) {
    this.props.handleSubmit(searchTerm);
  };

  onKeyPress = (event) => {
      if (event.key === "Enter") {
this.handleSubmit(this.state.searchTerm)
    }
};

  render()  {
  return (
    <Paper elevation={6} style={{ padding: "10px", backgroundColor: "rgb(80,80,80)" }}>
      <TextField
        fullWidth
        label="Search..."
        value={this.state.searchTerm}
        onChange={this.handleChange}
        onKeyPress={this.onKeyPress}
        handleSubmit={this.handleSubmit}
      />
    </Paper>
  );
}
};

export default SearchBar;