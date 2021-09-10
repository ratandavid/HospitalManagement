import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Registerform() {
    const[Name,setName] = useState('');
    const[email,setemail] = useState('');
    const[password,setpassword] = useState('');

    function Emailchange(e){
        setemail(e.target.value)
    }

    function Passwordchange(e){
        setpassword(e.target.value)
    }

    function Namechange(e){
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="formbox">
            
            <form className="form" onSubmit={handleSubmit}>
            <h4> Register </h4>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="email" value={Name} onChange={Namechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="typeyourmailid@gmail.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="password" value={email} onChange={Emailchange} className="form-control" id="exampleInputPassword1" placeholder="********"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={Passwordchange} className="form-control" id="exampleInputPassword1" placeholder="********"/>
                </div>
                <a href="#" className="fogetpass">Forget Password</a>
                <Link to="/Home"> <button type="submit" className="btn btn-primary submit">Submit</button></Link>
                <div className="regisration">
                    <p>If have an account?<span><Link to="/"> Login </Link></span></p>
                </div>

                <p className="orsection">Or</p>

                <button type="submit" className="btn btn-primary loginwithgoogle"><i className="fab fa-google"></i> Continue with Google</button>
            </form>
        </div>
    )
}

export default Registerform
