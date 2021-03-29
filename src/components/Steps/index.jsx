import React from 'react';
import right from '../../images/right.svg';
import center from '../../images/center.svg';
import left from '../../images/left.svg';

const Steps = () => {
  return (
    <div className='steps'>
      <div className='step-card'>
        <img src={left} alt='' />
        <h2>ליווי אישי במחירים הכי משתלמים</h2>
        <p>
          הדבר החשוב לנו ביותר הוא לקוחות מרוצים. נלווה אתכם באופן אישי לאורך כל
          התהליך במחירים משתלמים ביותר
        </p>
      </div>
      <div className='step-card'>
        <img src={center} alt='' />
        <h2>תחזוקה וחידוש אתרים לקיימים</h2>
        <p>
          אנחנו לא נשאיר אתכם לבד. נוסיף שירותי תחזוקה וליווי גם אחרי שנעלה את
          התאתר לאויר.
        </p>
      </div>
      <div className='step-card'>
        <img src={right} alt='' />
        <h2>אפיון עיצוב ובניית אתרים</h2>
        <p>
          אנחנו מתמחים בבניית אתרי תדמית. משלב האפיון ועד העלאת האתר החדש לאויר.
        </p>
      </div>
    </div>
  );
};

export default Steps;
