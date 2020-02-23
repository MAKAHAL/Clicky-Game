
import React, { Component } from "react";
import CharacterCard from "./components/CatsCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cats from "./cats.json";
import "./App.css";

<Wrapper>
        <Nav
          title="Clicky Game"
          score={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />

<Title>
Click on an image to earn points, but don't click on any more than once!
</Title>
    {this.state.characters.map(cats => (
        <CatsCard
          key={cats.id}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          id={cats.id}
          image={cats.image}
        />
    ))}
</Wrapper>
 const choosecat = () => {

  setcat(cats.sort(() => Math.random() - 0.5))

   }

  
  export default App;