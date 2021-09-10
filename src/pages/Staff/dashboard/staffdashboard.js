import React from 'react';

import './css/staffdashboard.css';
import Report from './components/report';
import Latestpatients from './components/stafflatestpatients';
import Patientsgraph from './components/patientsgraph';

function StaffDashboard() {
    var icons = 
    [
    <i className="fas fa-door-open"></i>, 
    <svg className="injection" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="red"><rect fill="none" height="24" width="24"/><path d="M7,22.5c0.55,0,1-0.45,1-1V17h1c1.1,0,2-0.9,2-2V7.5c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H8V4h0.5c0.55,0,1-0.45,1-1 c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1H6v1.5H3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1V15c0,1.1,0.9,2,2,2h1 v4.5C6,22.05,6.45,22.5,7,22.5z M9,9H7.25C6.84,9,6.5,9.34,6.5,9.75c0,0.41,0.34,0.75,0.75,0.75H9V12H7.25 c-0.41,0-0.75,0.34-0.75,0.75c0,0.41,0.34,0.75,0.75,0.75H9L9,15H5V7.5h4V9z M19.5,10.5V10c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1h-5 c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1v0.5c0,0.5-1.5,1.16-1.5,3V20c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-6.5 C21,11.66,19.5,11,19.5,10.5z M16.5,10.5V10h1v0.5c0,1.6,1.5,2,1.5,3V14h-4c0-0.21,0-0.39,0-0.5C15,12.5,16.5,12.1,16.5,10.5z M15,20c0,0,0-0.63,0-1.5h4V20H15z"/></svg> ,
    <i className='fas fa-bed' ></i>
    
    ]
    return (
        <div className="row">
            <div className="col-xl-8 col-md-8 col-sm-8">
                <div className="dashboardContent">
                    <h5>Dashboard</h5>
                    <div className=" dashboard">
                        <div className="col-xl-3 col-md-3">
                            <div className="totalpaitents">
                                <i className="fas fa-user-circle"></i>
                                <div className="text">
                                    <p>Total paitents</p>
                                    <h4>2.040</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="totalStaffs">
                                <i className="fas fa-shield-alt"></i>
                                <div className="text">
                                    <p>Total Staffs</p>
                                    <h4>17.000</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-3">
                            <div className="totalRooms">
                                <i className="fas fa-home"></i>
                                <div className="text">
                                    <p>Total Rooms</p>
                                    <h4>4.800</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="totalCars">
                                <i className="fas fa-heartbeat"></i>
                                <div className="text">
                                    <p>Total Cars</p>
                                    <h4>3.000</h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <Patientsgraph />

                <Latestpatients />
            </div>


            <div className="col-xl-4 col-md-4 col-sm-4">
                <h5 className="report-text">Report</h5>
                <Report para={'Second floor bathroom had a broken door'} bottompara={'1min'} src={icons[0]} />
                <Report para={'Corona vaccine are not available'} bottompara={'2min'} src={icons[1]} />
                <Report para={'Second floor beds are full'} bottompara={'5min'} src={icons[2]} />  
                
            </div>
        </div>
    )
}

export default StaffDashboard
