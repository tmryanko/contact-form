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
    MuiFormControl: {
      root: {
        marginBottom: '20px',
      },
    },
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

const TextField = ({ label, type, value, onChange, id, name }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTextField
        // InputProps={{ disableUnderline: true }}
        // variant='filled'
        // error
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        required
        label={label}
        size='small'
      />
    </ThemeProvider>
  );
};

export default TextField;
