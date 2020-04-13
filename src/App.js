import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {advice: ''};
  
  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice`)
    .then((res) => {
      const { advice } = res.data.slip
      
      this.setState({advice})
    })
    .catch((err) => console.log(err));
  } 

  render (){
    const {advice} = this.state
    return(
      <div className="App">
        <h1 className="title">Lit Advice</h1>
        <div className="card">
          <h1 className="header">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Wanna a new advice...<span role="img" aria-label="light-bulb">💡</span></span>
          </button>
        </div>
      </div>
    )};
}

export default App;
