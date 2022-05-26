import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from "./routers";
import { ThemeProvider } from '@mui/private-theming';
import Theme from "./theme"
import ToastComponent from './views/components/ToastComponent'

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
        <ToastComponent></ToastComponent>
      </ThemeProvider>
    );
  }
}

export default App;
