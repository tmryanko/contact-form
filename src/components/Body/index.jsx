import React from 'react';
import TextField from '../TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import bg from '../../images/body.png';
const ColorButton = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(purple[500]),
    margin: 10,
    direction: 'ltr',
    backgroundColor: '#E1CDAE',
    '&:hover': {
      backgroundColor: '#E1CDAE',
    },
  },
}))(Button);

const Body = () => {
  return (
    <div className='body'>
      <img height='100%' width='100%' src={bg} alt='' />
      <form noValidate autoComplete='off'>
        <div className='title'>השאירו פרטים כאן ונחזור אליכם בהקדם</div>
        <TextField label='שם מלא:' />
        <TextField label='טלפון:' />
        <TextField label='אימייל:' />
        {/* <TextField label='פרטים נוספים:' /> */}
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
  );
};

export default Body;
