import React from 'react'
import '../css/report.css'

function Report(props) {
    return (
        <div className="reportContent">
            
            <div className="reportcard">
                <div className="report-content">
                        
                    {props.src}
                    <p>{props.para}</p>

                </div>
                <div className="reportbottom-content">
                    <p>{props.bottompara}</p>
                </div>

            </div>
        </div>
    )
}

export default Report
