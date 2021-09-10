import React from 'react'
import Image from '../../assets/img/formbackground.jpg';
import Registerform from './regiterform';
import '../css/login.css';

function Register() {
    return (
        <div className="container-fluid">

            <div className="row">
                
                <div className="col-xl-6 col-sm-6 formimage">
                    <img className="img-fluid" src={Image} />
                </div>
                <div className="col-xl-6 col-sm-6 myform">
                    <Registerform />
                </div>


            </div>


        </div>
    )
}

export default Register
