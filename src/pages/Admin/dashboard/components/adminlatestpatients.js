import React from 'react';

import '../css/latestpatients.css'

function Latestpatients() {
    return (
        <div className="latestpatients">
            <h5>Staff Members</h5>
            <div className="editTable">
                <table className="table">
                    <thead className="table-dark">
                        <th className="start">No.</th>
                        <th className="middle">Date</th>
                        <th className="middle">ID</th>
                        <th className="middle">Name</th>
                        <th className="middle">Age</th>
                        <th className="middle">Country</th>
                        <th className="last">Settings</th>
                    </thead>
                    <tbody className="tbody">
                        <tr>
                            <td>01</td>
                            <td>22/02/2021</td>
                            <td>GH-224534</td>
                            <td>John</td>
                            <td>23</td>
                            <td>India</td>
                            <td><i className="fas fa-edit"></i>  <i className="far fa-trash-alt"></i></td>     
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>22/02/2021</td>
                            <td>GH-224534</td>
                            <td>John</td>
                            <td>23</td>
                            <td>India</td>
                            <td><i className="fas fa-edit"></i>  <i className="far fa-trash-alt"></i></td>     
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>22/02/2021</td>
                            <td>GH-224534</td>
                            <td>John</td>
                            <td>23</td>
                            <td>India</td>
                            <td><i className="fas fa-edit"></i>  <i className="far fa-trash-alt"></i></td>     
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Latestpatients
