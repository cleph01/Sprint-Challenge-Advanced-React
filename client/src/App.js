import React, {useState} from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import NavBar from './components/NavBar';
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {

      players: []
    }
  }


  fetchUserData = () => {
    axios.get(`http://localhost:5000/api/players`)
      .then(result => {

        console.log(result.data, 'result')

        this.setState({
          players: result.data
        })
      })
      .catch(error => {
        console.log('errror', error)
      })
  }

  componentDidMount(){
    this.fetchUserData()
  }


  render(){

    return (

    <>
      <div>
        <NavBar />

        {this.state.players.map( (player, index) => (
          
            <UserCard className='player-card'
              key={index}
              player={player}
            />
        ))}
      </div>  
      

    </>
    
    )

  }
}

export default App;
