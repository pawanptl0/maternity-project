import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Diet from './diet';
import Exercise from './exercise';
import Navbar from './navbar';
import Tips from './tips';
import CommonProblems from './commonProblems';
import Tests from './tests';

const MainHost = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Diet />
        </Route>
        <Route path="/exercise">
          <Exercise />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
        <Route path="/commonproblems">
          <CommonProblems />
        </Route>
        <Route path="/tests">
          <Tests />
        </Route>
        <Route>
          <Diet />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default MainHost;
