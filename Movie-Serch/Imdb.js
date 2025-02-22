import React from "react";
import Header from "./Header";
import MoviePannal from "./MoviePannal";
import MovieForm from "./MovieForm";

export default class Imdb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieArray: [],
      showForm: false,
    };
  }

  openForm = () => {
    this.setState({ showForm: true });
  };

  // Function to add a movie and return to movie list
  addMovie = (movie) => {
    console.log("Added movie:", movie);
    this.setState((prev) => ({
      movieArray: [movie, ...prev.movieArray], // Add new movie at the top
      showForm: false, // Switch back to Panel view
    }));
  };

  render() {
    return (
      <div>
        <Header openForm={this.openForm} />
        {this.state.showForm ? (
          <MovieForm addMovie={this.addMovie} />
        ) : (
          <MoviePannal movieArray={this.state.movieArray} />
        )}
      </div>
    );
  }
}
