import React, { Component } from "react";
import Navbar from "./Components/Navbar"
import PictureCard from "./Components/PictureCard"
import Wraper from "./Components/Wrapper"
import Images from "./Images.json";
import "./index.css";


class App extends Component {
  state = {
    Images,
    score: 0,
    topScore: 0,
  }
  componentDidMount() {
    this.setState({ Images: this.shuffleArray(this.state.Images) });
  }




  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      Images: this.shuffleArray(newData),
      score: newScore,
      topScore: newTopScore,
    });
  };
  handleIncorrectGuess = Images => {
    this.setState({
      Images: this.resetData(Images),
      score: 0
    });
  };


  resetData = Images => {
    const resetData = Images.map(image => ({ ...image, clicked: false }));
    return this.shuffleArray(resetData);
  };

  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  handleClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.Images.map(image => {
      const newItem = { ...image };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }

      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);

  };



  render() {
    return (
      <>

        <Navbar
          score={this.state.score}
          navMessage={this.state.navMessage}
          topScore={this.state.topScore}
        />
        {this.renderMessage}
        <div class=" info-container">
          <div class="Row">
            <div class= "col sm6">
            <h1>Begin Clicky Game by clicking any image</h1>
            <span>
              <h1>To earn points don't click same image again!!</h1>
            </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col md8">
            <Wraper>
              {this.state.Images.map(image => (
                <PictureCard
                  key={image.id}
                  id={image.id}
                  shake={!this.state.score && this.state.topScore}
                  handleClick={this.handleClick}
                  image={image.image}

                />
              ))}

            </Wraper>
          </div>
        </div>
      </>



    )
  }
}
export default App;




