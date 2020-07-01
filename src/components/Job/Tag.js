import React from 'react'

import './tag.scss';
import { useJobs } from '../../context';

export const Tag = ({ text }) => {

    const filterContext = useJobs().filterData;


    return (
        <div className="tag" onClick={() => { filterContext(text) }}>
            {text}
        </div>
    )
}