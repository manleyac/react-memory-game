import React from "react";
import "./style.css";

class GameCard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         character: this.props.name,
         clicked: false
      }
   }

   render() {
      return (
         <div className="card" style={{width: "7rem"}}>
            <div className="img-container">
               <img alt={this.props.name} src={require("../../CharacterPics/" + this.props.image)}/>
            </div>
         </div>
      );
   }
}


export default GameCard;

