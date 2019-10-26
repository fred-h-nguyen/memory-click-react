import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import avengers from './components/Character/avengersData.json';
import CharacterView from './components/CharacterView';

const randomize = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

class App extends React.Component {
  state = {
    avengers,
    currentScore: 0,
    topScore: 0,
    message: "Click an Image to Start",
    clicked:[]
  }

  cardClickedEvent = key =>{
    if(this.state.clicked.indexOf(key)===-1){
      this.incrementScore();
      this.setState({clicked: this.state.clicked.concat(key)})
    } else {
      this.resetCards();
    }
  }

  incrementScore = () =>{
    const newScore = this.state.currentScore + 1
    this.setState({
      currentScore : newScore,
      message:"You Guessed Right"
    })

    if(newScore >= this.state.topScore){
      this.setState({topScore:newScore})
    }else if (newScore === 32) {
      this.setState({message:'You are the ultimate AVENGER'})
    }
    this.shuffleCards();
  }

  shuffleCards = ()=>{
    let shuffleCards = randomize(avengers);
    this.setState({avengers : shuffleCards})
  }

  resetCards = () => {
    this.setState({
      currentScore:0,
      topScore: this.state.topScore,
      message:"You Have Guessed Wrong",
      clicked:[]
    })
  }

  render() {
    return (
      <>
        <Navbar message={this.state.message} currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        <CharacterView avengers = {this.state.avengers} cardClickedEvent = {this.cardClickedEvent}/>
        <Footer />
      </>

    );
  }
}

export default App;
