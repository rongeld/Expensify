import React from 'react';
import {connect} from 'react-redux';
import {startLoginGoogle, startLoginFacebook} from '../actions/auth';

export const LoginPage = ({startLoginGoogle, startLoginFacebook}) => {
   return (
      <div>
         <button onClick={startLoginGoogle}>Login with Google</button>
         <button onClick={startLoginFacebook}>Login with Facebook</button>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   startLoginGoogle: () => dispatch(startLoginGoogle()),
   startLoginFacebook: () => dispatch(startLoginFacebook())
}) 


export default connect(undefined, mapDispatchToProps)(LoginPage);
 
