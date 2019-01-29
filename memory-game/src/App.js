import React, {Component} from 'react';
import GameBoard from "./components/GameBoard";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import charactersObj from "./CharacterPics/characters.json";
import Header from "./components/Header";

const charactersCards = (start,stop) => {
  let charactersArray = Object.keys(charactersObj);
  let cardsArray = [];
  for(let i = start; i <= stop; i++) {
    let character = charactersArray[i];
    let comp = <GameCard name={character} image={charactersObj[character]} />;
    cardsArray.push(comp);
  }
  return cardsArray;
}

class App extends Component {
  state = {

  }
  
  render() {
    return (
      <Wrapper>
        <Header/>
        <GameBoard/>
      </Wrapper>
    );
  }
}

export default App;
