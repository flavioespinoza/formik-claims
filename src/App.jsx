import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignupForm from 'views/Forms/SignupForm/SignupForm';

const App = () => {
  const _App = () => {
    return (
      <section className="App">
        <Switch>
          <Route path="/signup" component={SignupForm} />
          <Route render={() => <Redirect to="/signup" />} />
        </Switch>
      </section>
    );
  };

  return (
    <Switch>
      <_App />
    </Switch>
  );
};

export default App;
