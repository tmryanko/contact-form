import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import './App.css';
import TextField from './components/TextField';

const ColorButton = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(purple[500]),
    margin: 10,
    direction: 'ltr',
    backgroundColor: '#f96e8e',
    '&:hover': {
      backgroundColor: '#f96e8e',
    },
  },
}))(Button);

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  return (
    <StylesProvider jss={jss}>
      <div className='App'>
        <div className='contact-form'>
          <div className='logo'></div>
          <form noValidate autoComplete='off'>
            <div className='title'>צרו קשר ונחזור בהקדם</div>
            <TextField label='שם מלא:' />
            <TextField label='טלפון:' />

            <TextField label='אימייל:' />

            <TextField label='פרטים נוספים:' />

            <ColorButton
              className='MuiButton-containedPrimary'
              variant='contained'
              color='primary'
              endIcon={<SendIcon />}
            >
              שלח
            </ColorButton>
          </form>
        </div>
      </div>
    </StylesProvider>
  );
};

export default App;
