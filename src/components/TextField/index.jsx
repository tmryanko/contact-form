import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
// import { ThemeProvider, createMuiTheme } from '@material-ui/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#e1cdae',
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#e1cdae',
          //   color: 'green',
        },
      },
    },
    MuiInput: {
      underline: {
        // color: 'red',
        // '&:focused:not($disabled):after': {
        //   backgroundColor: 'red',
        // },
        // '&:focused:not($disabled):before': {
        //   backgroundColor: 'red', // String should be terminated
        // },
      },
    },
  },
});

const TextField = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTextField
        // InputProps={{ disableUnderline: true }}
        // variant='filled'
        label={label}
        size='small'
      />
    </ThemeProvider>
  );
};

export default TextField;
