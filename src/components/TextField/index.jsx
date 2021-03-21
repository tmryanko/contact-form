import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
// import { ThemeProvider, createMuiTheme } from '@material-ui/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({ direction: 'rtl' });

const TextField = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTextField
        InputProps={{ disableUnderline: true }}
        variant='filled'
        label={label}
      />
    </ThemeProvider>
  );
};

export default TextField;
