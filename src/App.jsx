import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header/Header';

const Main = lazy(() => import('./Pages/Main'));
const Gugudan = lazy(() => import('./Pages/Gugudan/Gugudan'));
const WordReplay = lazy(() => import('./Pages/WordReplay/WordReplay'));
const NumberBaseball = lazy(() => import('./Pages/NumberBaseball/NumberBaseball'));
const ResponseCheck = lazy(() => import('./Pages/ReactionRate/ResponseCheck'));
const RSP = lazy(() => import('./Pages/RSP/RSP'));
const Lotto = lazy(() => import('./Pages/Lotto/Lotto'));
const TicTacToe = lazy(() => import('./Pages/TicTacToe/TicTacToe'));

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/gugudan" component={Gugudan} />
          <Route path="/word-replay" component={WordReplay} />
          <Route path="/number-baseball" component={NumberBaseball} />
          <Route path="/reaction-rate" component={ResponseCheck} />
          <Route path="/rsp" component={RSP} />
          <Route path="/lotto" component={Lotto} />
          <Route path="/tictactoe" component={TicTacToe} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
