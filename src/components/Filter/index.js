import React from 'react'

import './index.scss';
import { useJobs } from '../../context';

export const Filter = () => {
    const jobContext = useJobs();

    const filters = jobContext.filters;

    return (
        <React.Fragment>

            <div className="wrap-filter">
                {filters.map((f, index) => {
                    return <TagFilter text={f} key={index}></TagFilter>
                })}

                {
                    filters.length > 0 &&
                    <ButtonClear jobContext={jobContext}></ButtonClear>
                }
            </div>
        </React.Fragment>
    )
}

const ButtonClear = ({ jobContext }) => {
    return (
        <div onClick={() => { jobContext.clear() }} style={{ position: "absolute", right: "5px", color: "hsl(180, 29%, 50%)", cursor: "pointer" }}>
            Clear
        </div>
    )
}

const TagFilter = ({ text }) => {
    const jobContext = useJobs();

    return (
        <div className="tag-filter">
            <div className="text">
                {text}
            </div>
            <div className="button" onClick={() => {
                jobContext.removeFilter(text)
            }}>
                <span>X</span>
            </div>
        </div>
    )
}
