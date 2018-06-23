import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import AssholeCard from "./components/AssholeCard";
import assholes from "./assholes.json";
import './App.css'


class App extends Component {
  state = {
    assholes,
    message: "Click on a Asshole to begin",
    topScore: 0,
    curScore: 0,
    assholes: assholes,
    unselectedAssholes: assholes
    

  }

  componentDidMount() {

  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  selectAsshole = name => {
    const findAsshole = this.state.unselectedAssholes.find(item => item.name === name);
    if(findAsshole === undefined) {
      this.setState({
        message: "You selected the same asshole twice!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        assholes: assholes,
        unselectedAssholes: assholes
      });
    }
    else {
      const newAsshole = this.state.unselectedAssholes.filter(item => item.name !== name);

      this.setState({
        message: "You guess correctly!",
        curScore: this.state.curScore + 1,
        assholes: assholes,
        unselectedAssholes: newAsshole
      });
    }

    this.shuffleArray(assholes);
  };

  render() {
    return(
      <Wrapper>
        <Title />
              { this.state.assholes.map(asshole => (
                      <AssholeCard
                          key={asshole.id}
                          name={asshole.name}
                          image={asshole.image}
                          occupation={asshole.occupation}
                          selectAsshole={this.selectAsshole} 
                          curScore={this.state.curScore}
                      />
                  ))
              }
          </Wrapper>
      
    );
  }
}




export default App;