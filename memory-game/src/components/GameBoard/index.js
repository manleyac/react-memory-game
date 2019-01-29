import React from "react";
import GameRow from "../GameRow";

class GameBoard extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="row">
            <div className="column">
               <GameRow />
               <GameRow />
               <GameRow />
            </div>
         </div>
      );
   }
}

export default GameBoard;