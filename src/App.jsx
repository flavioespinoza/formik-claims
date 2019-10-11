import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignupForm from 'views/Forms/SignupForm/SignupForm';
import AddressForm from 'views/Forms/AddressForm/AddressForm';
import NestedForm from 'views/Forms/NestedForm/NestedForm';

const App = () => {
  const AppView = () => {
    return (
      <section className="App">
        <Switch>
          <Route path="/nested" component={NestedForm} />
          <Route path="/address" component={AddressForm} />
          <Route path="/signup" component={SignupForm} />
          <Route render={() => <Redirect to="/signup" />} />
        </Switch>
      </section>
    );
  };

  return (
    <Switch>
      <AppView />
    </Switch>
  );
};

export default App;
