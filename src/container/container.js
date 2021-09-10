import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Header from './header/header';
import Admin from '../pages/Admin/Admin';
import Sidenavigation from './sidenav/sidenav';
import './container.css';
import Staff from '../pages/Staff/staff';

function Container() {
    
    return (<div className="container-fluid">
        <div className='row'>
            <div className="col-xl-1 col-md-1 col-sm-1 navigation">
                <Sidenavigation />
            </div>
            <div className="col-xl-11 col-md-11 col-sm-11 body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-sm-12 headerContent">
                            <Header />
                        </div>

                        <div className="col-xl-12 col-md-12 col-sm-12 ">
                            <Admin />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Container;