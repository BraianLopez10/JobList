import React from 'react'

import { Job } from '../Job';
import { useJobs } from '../../context'
import './index.scss';

export const Jobs = (props) => {
    let contextJobs = useJobs();

    const jobsContext = contextJobs.data;


    return (
        <React.Fragment>
            <div className="container-jobs" >
                {jobsContext.map((j, index) => {
                    return (
                        <Job job={j} key={index} ></Job>
                    )
                })}
            </div>
        </React.Fragment >

    )
}