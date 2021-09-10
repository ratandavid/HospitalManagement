import React from 'react'

import '../css/login.css';
import Loginform from './loginform'
import Image from '../../assets/img/formbackground.jpg';

function Login() {
    return (
        <div className="container-fluid">

            <div className="row">
                
                <div className="col-xl-6 col-sm-6 formimage">
                    <img className="img-fluid" src={Image} />
                </div>
                <div className="col-xl-6 col-sm-6 myform">
                    <Loginform />
                </div>


            </div>


        </div>
    )
}

export default Login
