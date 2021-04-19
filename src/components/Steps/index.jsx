import React, { useEffect, useState } from 'react';
import Zoom from '@material-ui/core/Zoom';

import right from '../../images/right.svg';
import center from '../../images/center.svg';
import left from '../../images/left.svg';

const Steps = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className='steps'>
      <Zoom in={show} timeout={1000}>
        <div className='step-card'>
          <img src={left} alt='' />
          <h2>ליווי אישי במחירים הכי משתלמים</h2>
          <p>
            הדבר החשוב לנו ביותר הוא לקוחות מרוצים. נלווה אתכם באופן אישי לאורך
            כל התהליך.
          </p>
        </div>
      </Zoom>
      <Zoom in={show} timeout={1500}>
        <div className='step-card'>
          <img src={center} alt='' />
          <h2>תחזוקה וחידוש אתרים לקיימים</h2>
          <p>
            אנחנו לא נשאיר אתכם לבד. נוסיף שירותי תחזוקה וליווי גם אחרי שנעלה את
            האתר לאויר.
          </p>
        </div>
      </Zoom>
      <Zoom in={show} timeout={2000}>
        <div className='step-card'>
          <img src={right} alt='' />
          <h2>אפיון עיצוב ובניית אתרים</h2>
          <p>
            אנחנו מתמחים בבניית אתרי תדמית. משלב האפיון ועד העלאת האתר החדש
            לאויר.
          </p>
        </div>
      </Zoom>
    </div>
  );
};

export default Steps;
