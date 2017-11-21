import React from 'react';
import {connect} from 'react-redux';
import {startLoginGoogle, startLoginFacebook} from '../actions/auth';

export const LoginPage = ({startLoginGoogle, startLoginFacebook}) => {
   return (
      <div className="login-page">
         <div className="buttons__group">
            <button onClick={startLoginGoogle} className="button-login button-login__google"><img src="/images/gbtn.png" alt="" className="button-login__google--img" /></button>
            <button onClick={startLoginFacebook} className="button-login button-login__facebook"><img src="/images/fb-btn.png" alt="" className="button-login__fb--img" /></button>
         </div>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   startLoginGoogle: () => dispatch(startLoginGoogle()),
   startLoginFacebook: () => dispatch(startLoginFacebook())
}) 


export default connect(undefined, mapDispatchToProps)(LoginPage);
 
