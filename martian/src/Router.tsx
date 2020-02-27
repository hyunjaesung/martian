import * as React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Journey from './routes/Journey';
import Search from './routes/Search';
import Header from './components/Header';

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/journey" component={Journey} />
        <Route path="/search/:keyword" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
