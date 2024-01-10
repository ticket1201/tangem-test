import Button from "./Button";
import IconButton from "./IconButton";
import {CloseIcon, MenuIcon} from "./Icons";
import {ForwardedRef, forwardRef} from "react";


const AlertLinear = forwardRef((_, ref: ForwardedRef<any>) => {
  return (
    <section className={'alert alert_linear'} ref={ref}>
      <div className={'image'}/>
      <div className={'text_wrapper'}>
        <li>
          <h3><span>Black Friday</span><span>, 24-27 Nov</span></h3>
        </li>
        <li>
          <h3 className={'text_gold'}><span>10%OFF</span></h3>
        </li>
        <li>
          <h3>Use code <span className={'text_gold'}>10FRIDAY</span><span> at checkout</span></h3>
        </li>
      </div>
      <div className={'buttons_wrapper'}>
        <Button
          text={'Shop now'}
          onClick={() => {
          }}
          type={'primary'}
        />
        <IconButton
          icon={<CloseIcon/>}
        />
      </div>
      <div className={'text_wrapper_mobile'}>
        <h3><span>Black Friday,</span></h3>
        <h3 className={'text_gold'}><span>10%OFF</span></h3>
        <IconButton icon={<MenuIcon/>} />
      </div>
    </section>
  );
});

export default AlertLinear;