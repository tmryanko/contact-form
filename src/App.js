import React from 'react';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import './App.css';
import AppBar from './components/AppBar';
import Body from './components/Body';
import Steps from './components/Steps';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  return (
    <StylesProvider jss={jss}>
      <div className='App'>
        <AppBar />
        <Steps />
        <Body />
      </div>
    </StylesProvider>
  );
};

export default App;
