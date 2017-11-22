import React from 'react';
import {connect} from 'react-redux';
import {startLoginGoogle, startLoginFacebook, startLoginEmail} from '../actions/auth';

export const LoginPage = ({startLoginGoogle, startLoginFacebook, startLoginEmail}) => {
   return (
      <div className="login-page">
         <h1>Expencify App</h1>
         <div className="buttons__group">
            <button onClick={startLoginGoogle} className="button-login button-login__google"><img src="/images/gbtn.png" alt="" className="button-login__google--img" /></button>
            <button onClick={startLoginEmail} className="button-login button-login__email"><img src="/images/Anonymous-PNG-Pic.png" alt="" /></button>
            <button onClick={startLoginFacebook} className="button-login button-login__facebook"><img src="/images/fb-btn.png" alt="" className="button-login__fb--img" /></button>
         </div>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   startLoginGoogle: () => dispatch(startLoginGoogle()),
   startLoginFacebook: () => dispatch(startLoginFacebook()),
   startLoginEmail: () => dispatch(startLoginEmail())
}) 


export default connect(undefined, mapDispatchToProps)(LoginPage);
 
