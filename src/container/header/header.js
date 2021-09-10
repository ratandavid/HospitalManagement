import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {useHistory } from "react-router-dom";
import './css/header.css'
function Header() {
    const history = useHistory();
    
    return (
        <div className="headerpart">



            <div className="Addone">
                { history.location.pathname === '/Home'
                 &&
                    <DropdownButton id="dropdown-basic-button" title="Add">
                        <Dropdown.Item href="#/action-1">Patients</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Doctors</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Staff</Dropdown.Item>
                    </DropdownButton>   
                }
                { history.location.pathname === '/staff'
                 &&
                    <button>Add Patient</button>
                }
                
            </div>
            <div className="list">
                <ul>
                    <li>
                        <a href="#">Treatments</a>
                    </li>

                    <li>
                        <a href="#">Doctors</a>
                    </li>

                    <li>
                        <a href="#">Help</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header
