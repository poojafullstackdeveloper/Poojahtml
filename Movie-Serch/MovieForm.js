import React from "react";
import "./MovieForm.css";

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      movieImage: "",
      movieDuration: "",
    };
  }

  // Handle input changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Handle form submission
  submitFunction = (event) => {
    event.preventDefault();
    const { movieName, movieImage, movieDuration } = this.state;

    // Validate inputs before adding
    if (movieName.trim() && movieImage.trim() && movieDuration.trim()) {
      this.props.addMovie({ movieName, movieImage, movieDuration });

      // Reset form fields after submission
      this.setState({ movieName: "", movieImage: "", movieDuration: "" });
    }
  };

  render() {
    return (
      <div>
        <h2 style={{textAlign:"center",fontSize:"30px"}}>Add a Movie</h2>
        <form onSubmit={this.submitFunction}>
          <fieldset>
            <legend style={{ fontSize: "20px", fontWeight: "bold",color:"white" }}>Movie Details</legend>

            {/* Movie Name */}
            <label htmlFor="movie-name">Movie Name:</label>
            <input
              type="text"
              name="movieName"
              value={this.state.movieName}
              onChange={this.handleChange}
              placeholder="Enter movie name"
            />

            {/* Movie Image */}
            <label htmlFor="movie-image">Movie Image URL:</label>
            <input
              type="url"
              name="movieImage"
              value={this.state.movieImage}
              onChange={this.handleChange}
              placeholder="Enter image URL"
            />

            {/* Movie Duration */}
            <label htmlFor="movie-duration">Movie Duration:</label>
            <input
              type="date"
              name="movieDuration"
              value={this.state.movieDuration}
              onChange={this.handleChange}
              placeholder="Enter duration"
            />

            <button className="submit" type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
