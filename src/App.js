import React from 'react';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import MeanGirlsComponent from './Components/mean-girls-component';
import MonstersIncComponent from './Components/monters-inc-component';
import EternalSunshineComponent from './Components/eternal-sunshine-component';
import TicketsComponent from './Components/tickets-component';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  let [time, setTime] = React.useState('')
}

const onSelectTime = (time) => {
  setTime(time)
}

const Home = () => {
  return(<div>
    <Jumbotron fluid>
      <Container fluid>
        <h1 className = "display-3"> Films To Watch</h1>
    
      <p className="lead"> Welcome to our interactive movie site here to provide tickets and showtimes</p>
         </Container>
      </Jumbotron>
        <MeanGirlsComponent onSelectTime={onSelectTime}/><br />
        <EternalSunshineComponent onSelectTime={onSelectTime}/><br />
        <MonstersIncComponent onSelectTime ={onSelectTime}/><br />
  </div> )}

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Route path='/' exact component=
  {Home} />
   
        <Route path="/ticket" render= {(props) => <TicketsComponent {...props}
        time={time} />} />
        </div>
        </BrowserRouter>

        </div>

  );

  export default App;