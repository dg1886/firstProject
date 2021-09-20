import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthPage from './Containers/Auth';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/auth" component={AuthPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
