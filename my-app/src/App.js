import React, { Component } from 'react';
import friends from "./friends.json"
import Header from "./components/Header";
import FriendCard from "./components/FriendCard";



// for the shuffle
function randomFriends (friends) {
  for (let i = friends.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  return friends;
};
class App extends Component {

  state = {
   friends,
   
    score: 0,
    topScore: 0,
    // card1: 0,
    // card2: 0,
    // card3: 0,
    // card4: 0,
    // card5: 0,
    // card6: 0,
    // card7: 0,
    // card8: 0,
    // card9: 0,
    // card10: 0,
    // card11: 0,
    // card12: 0,
    clickedCards:[]
  }


  // cardClick = (id) => {
  //   if (this.state.clickedCards.indexOf(id) === -1) {
  //     this.cardIncrement();
  //     this.setState({ clickedCards: this.state.clickedCards.concat(id) });
  //   } else {
  //     this.cardReset();
  //   }
  // };
  // cardIncrement = () => {
  //     this.setState({
  //       score: this.state.score + 1,
  //       topScore:  this.state.score + 1 > this.state.topScore ? this.state.score +1 : this.state.topScore,
  //       friends: this.shuffle(friends),
  
  //     });
  cardClick = (id) => {
    let clickedCards = this.state.clickedCards
    if (!clickedCards.includes(id)){
      clickedCards.push(id)
      console.log('clicked cards: ', clickedCards);

      this.setState({
        score: this.state.score + 1,
        topScore:  this.state.score + 1 > this.state.topScore ? this.state.score +1 : this.state.topScore,
        friends: this.randomFriends(friends),
  
      });

    } else if (clickedCards.includes(id)){
      this.gameReset()
      console.log('clicked cards: ', clickedCards);
    } 

    
  }

    
    
  
  // Shuffle = () => {
  //   let shuffledFriends = randomFriends(friends);
  //   this.setState({ friends: shuffledFriends });
  // };


 
   
  render() {
    return (
      <div>
      <Header 
        score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
        <div className="jumbotron pictureArea">
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              onClick={this.cardClick.bind(this, friend.name)}
            />
          ))}
        


        </div>



     </div>
    );
  }
}

export default App;