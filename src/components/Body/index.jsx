import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import TextField from '../TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import bg from '../../images/body.png';
import insta from '../../images/insta.svg';
import face from '../../images/face.svg';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  //   const [openSnack, setOpenSnack] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_nfsd1du',
        'template_3hw81b8',
        e.target,
        'user_YLwoeLH8Z2nxsMY1RZGmy',
      )
      .then(
        (result) => {
          //   setOpenSnack(true);
          console.log('ddd');
          setPhone('');
          setEmail('');
          setName('');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className='body'>
      <img height='100%' width='100%' src={bg} alt='' />
      <form noValidate autoComplete='off' onSubmit={handleForm}>
        <div className='title'>השאירו פרטים כאן ונחזור אליכם בהקדם</div>
        <TextField
          label='שם מלא:'
          onChange={(e) => setName(e.target.value)}
          type='text'
          name='name'
          id='name'
          value={name}
        />
        <TextField
          label='טלפון:'
          onChange={(e) => setPhone(e.target.value)}
          name='phone'
          id='phone'
          type='tel'
          value={phone}
        />
        <TextField
          label='אימייל:'
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          id='email'
          type='email'
          value={email}
        />
        {/* <TextField label='פרטים נוספים:' /> */}
        <ColorButton
          className='MuiButton-containedPrimary'
          type='submit'
          variant='contained'
          color='primary'
          endIcon={<SendIcon />}
        >
          שלח
        </ColorButton>
        <div>
          <a
            href='https://www.instagram.com/mt.imagewebsites/'
            style={{ marginLeft: '5px' }}
          >
            <img src={insta} alt='' />
          </a>
          <a href='http://'>
            <img src={face} alt='' />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Body;
