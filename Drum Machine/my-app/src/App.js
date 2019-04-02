import React, { Component } from 'react';
import './App.css';
import Pad from './components/Pad';
import Display from './components/Display';
import cNote from './components/sounds/c.wav';
import cSharpNote from './components/sounds/csharp.wav';
import dNote from './components/sounds/d.wav';
import eNote from './components/sounds/e.wav';
import fNote from './components/sounds/f.wav';
import fSharpNote from './components/sounds/fsharp.wav';
import gNote from './components/sounds/g.wav';
import aNote from './components/sounds/a.wav';
import bNote from './components/sounds/b.wav';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentNote: "Let's  Play"
    }

    this.updateNote = this.updateNote.bind(this);
  }

  updateNote(note){
    this.setState({
      currentNote: note
    })
  }


  render() {
    const purple = '-webkit-linear-gradient(left, 	#c862ff 0%, #bf91f9 100%)';
    const cyan = '-webkit-linear-gradient(left, 	#f000ff 0%, #f661ff 100%)';
    const blue = '-webkit-linear-gradient(left, #0075ff 0%, 	#3db3ff 100%)';
    const sky = '-webkit-linear-gradient(left, #00f0ff 0%, 	#3dfff9 100%)';
    const green = '-webkit-linear-gradient(left, #72f22c 0%, #78ff89 100%)';
    const greenish = '-webkit-linear-gradient(left, #b3f22c 0%, #d0ff78 100%)';
    const yellow = '-webkit-linear-gradient(left, #ffff00 0%, #fcff7e 100%)';
    const orange = '-webkit-linear-gradient(left, #ffb433 0%, #ffc224 100%)';
    const red = '-webkit-linear-gradient(left, #ff301b 0%, #ed213a 100%)';

    const purpleGlow = '0px 0px 20px 5px #bc4fff';
    const cyanGlow = '0px 0px 20px 5px #f046ff';
    const blueGlow = '0px 0px 15px 2px #4b73ff';
    const skyGlow = '0px 0px 15px 2px #4bf4ff';
    const greenGlow = '0px 0px 15px 2px #48fa00';
    const greenishGlow = '0px 0px 15px 2px #dcff4e';
    const yellowGlow = '0px 0px 20px 5px #fffc00';
    const orangeGlow = '0px 0px 20px 5px #ffc033';
    const redGlow = '0px 0px 15px 2px #ff301b';

    return (
      <div className="drum-wrapper">
        <div id="drum-machine">
          <Display display={this.state.currentNote} />
          <Pad id="C-Major" text="Q" color={purple} glow={purpleGlow} track={cNote} updateNote={this.updateNote}/>
          <Pad id="D-Major" text="W" color={cyan} glow={cyanGlow} track={dNote} updateNote={this.updateNote}/>
          <Pad id="E-Major" text="E" color={blue} glow={blueGlow} track={eNote} updateNote={this.updateNote}/>
          <Pad id="F-Major" text="A" color={sky} glow={skyGlow} track={fNote} updateNote={this.updateNote}/>
          <Pad id="G-Major" text="S" color={green} glow={greenGlow} track={gNote} updateNote={this.updateNote}/>
          <Pad id="A-Major" text="D" color={greenish} glow={greenishGlow} track={aNote} updateNote={this.updateNote}/>
          <Pad id="B-Major" text="Z" color={yellow} glow={yellowGlow} track={bNote} updateNote={this.updateNote}/>
          <Pad id="C#-Major" text="X" color={orange} glow={orangeGlow} track={cSharpNote} updateNote={this.updateNote}/>
          <Pad id="F#-Major" text="C" color={red} glow={redGlow} track={fSharpNote} updateNote={this.updateNote}/>
        </div>
      </div>

    )
  }
}

export default App;
