import React, {useEffect, useState} from 'react';
import Button from "./Button";
import IconButton from "./IconButton";
import {CloseIcon} from "./Icons";

type PropsType = {
  isShow: boolean
  onCloseClick: () => void
}

const AlertSqr = ({isShow, onCloseClick}: PropsType) => {
  const [openTriggered, setOpenTriggered] = useState(isShow)
  const [closeTriggered, setCloseTriggered] = useState(false)

  const getVisibilityStyle = () => {
    if (closeTriggered) return 'hidden'
    return openTriggered ? 'visible' : ''
  }

  const handleCloseClick = () => {
    setCloseTriggered(true)
    onCloseClick()
  }

  useEffect(() => {
    isShow && setOpenTriggered(true)
  }, [isShow]);

  return (
    <section className={`alert alert_sqr alert-${getVisibilityStyle()}`}>
      <div className={'image'}/>
      <div className={'button-text_wrapper'}>
        <div className={'text_wrapper'}>
          <h2>Black Friday</h2>
          <h2 className={'gradient'}>10%OFF</h2>
          <h4>Use code <span className={'text_gold'}>10FRIDAY</span> at checkout</h4>
        </div>
        <Button text={'Shop now through Monday'} type={'secondary'}/>
      </div>
      <IconButton icon={<CloseIcon/>} onClick={handleCloseClick} className={'rightTop'}/>
    </section>
  );
};

export default AlertSqr;