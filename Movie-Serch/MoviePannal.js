import React from "react";

export default class MoviePannal extends React.Component {
  render() {
    return (
      <div className="pannal">
        <h2 style={{textAlign:"center",color:"black",fontSize:"30px"}}>Not Yet,Click on Add movie button</h2>
        <ul>
          {this.props.movieArray.length > 0 ? (
            this.props.movieArray.map((movie, index) => (
              <li key={index}>
                <h3>{movie.movieName}</h3>
                <img src={movie.movieImage} alt={movie.movieName} style={{ width: "100px" }} />
                <p>Duration: {movie.movieDuration}</p>
              </li>
            ))
          ) : (
            <p></p>
          )}
        </ul>
      </div>
    );
  }
}
