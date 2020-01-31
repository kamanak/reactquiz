// @ts-nocheck

import React,{Component} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import Home from './components/Home'
import Quizinstruction from './components/quiz/Quizinstrution';
import Play from './components/quiz/Play';




export class App extends Component {
  render() {
    return (
      <Router>
      <Route path="/" exact  component={Home} />
      <Route path="/play/instructions" exact component={Quizinstruction} />
      <Route path="/play/quiz" exact component={Play} />
      
    </Router>
     
    )
  }
}

export default App
