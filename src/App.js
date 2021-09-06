import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Router from './router';

import './App.css';

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Router />
      {/*<Footer title="Footer" description="Something here to give the footer a purpose!" />*/}
    </React.Fragment>
  );
}

export default App;