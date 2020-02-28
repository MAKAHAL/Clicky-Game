import React, { Component } from 'react';
import  './App.css';
import friends from "./friends.json"
import Header from "./components/Header";
import FriendCard from "./components/FriendCard";


class App extends Component {

  state = {
   friends,
    score: 0,
    topScore: 0,
    message: "Click on the images to play, Don't click on an image twice!",
    shakeit: "false",
    clickedCards:[]
  }
  // componentDidMount() {
  //   this.setState({ data: this.shufflefriend(this.state.data) });
  // }

  // resetData = data => {
  //   const resetData = data.map(item => ({ ...item, clicked: false }));
  //   return this.shufflefriend(resetData);
    
  // };
// for the shuffle
shufflefriend (friends){

  for ( var i = friends.length - 1; i > 0; i--) {
   var  j = Math.floor(Math.random() * (i + 1));
    [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  return friends;
}   // Shuffle = () => {
  //   let shuffledFriends = randomFriends(friends);
  //   this.setState({ friends: shuffledFriends });
  // };

  cardClick = (id) => {
    const shufflefriend = this.shufflefriend(friends);
    this.setState({friends: shufflefriend});

    if (this.state.clickedCards.includes(id)) {
      this.setState({ score: 0, clickedCards: [], 
        message: "Click an image to start again!", shakeit: "true"});
    }
    else {
      this.setState({
        clickedCards: this.state.clickedCards.concat([id]),
        score: this.state.score + 1,
        shakeit: "false"
      });
    }
  
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  
  }
  
    
  // gameover = () => {
  //   if (this.state.score > this.state.topScore) {
  //     this.setState({topscore: this.state.score}, function() {
  //       console.log(this.state.topscore);
  //     });
  //   }
  



 
   
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