import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';

/*=========== Import Pages ===========*/
import Header from './Components/Header';
import Play from './Components/Play';
import Footer from './Components/Footer';
import Game from './Components/Game';

function App() {
  const [myChoice, setMyChoice] = useState('');
  const [score, setScore] = useState(0);
  return (
    <>
      <div className="container">
        <Router>
          <Header score={score} />
          <Switch>
            <Route exact path="/">
              <Play setMyChoice={setMyChoice} />
            </Route>

            <Route path="/game">
              <Game myChoice={myChoice} score={score} setScore={setScore} />
            </Route>
          </Switch>
          <Footer setScore={setScore} />
        </Router>
      </div>
    </>
  );
}

export default App;
