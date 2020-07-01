import React from 'react'

import { Job } from '../Job';
import { useJobs } from '../../context'
import './index.scss';
import { Filter } from '../Filter';

export const Jobs = (props) => {

    let contextJobs = useJobs();

    const jobsContext = contextJobs.data;
    const filters = contextJobs.filters;

    console.log(filters);

    return (
        <React.Fragment>

            <Filter filters={filters}></Filter>
            <div className="container-jobs" style={filters.length > 0 ? ({ paddingTop: "120px" }) : ({})} >
                {jobsContext.map((j, index) => {
                    return (
                        <Job job={j} key={index} ></Job>
                    )
                })}
            </div>
        </React.Fragment >

    )
}