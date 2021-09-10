import React from 'react';
import {Line} from 'react-chartjs-2';

import '../css/patient.css'; 

function Patientsgraph() {
    return (
        <div className="patientStats">
            <h5>Patient Statistics</h5>    
            <div className="patients">
                <Line
                    data={{
                        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
                        datasets: [{
                            label: 'Patient stats',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                          }]
                    }}
                    height={200}
                    width={600}
                />
            </div>
        </div>
    )
}

export default Patientsgraph
