
import React from "react";
import "./Header.css";


export default class Header extends React.Component {
 

  
  render() {
    return (
      <header className="header">
        <div>
          <img  style={{height:"90px",width:"150px"}} src="https://play-lh.googleusercontent.com/sb30umyAPj9A4ixl4jnPJO15ET-mo4TihKOI0xwFzRbxOfZo6fozeKmAjf8Lhl3mqHY"></img>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
         
        </div>

        <button onClick={()=>this.props.openForm()}>Add Movie+</button>
      </header>
    );
  }
}