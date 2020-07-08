import React from 'react';
import './index.scss';
import { Tag } from './Tag';

export const Job = ({ job }) => {
    return (
        <div className="wrap-job" style={job.featured ? ({ borderLeft: "5px solid hsl(180, 29%, 50%)" }) : ({})}>
            <div className="job" >
                <div className="image">
                    <img src={job.logo} alt="icon-company"></img>
                </div>
                <div className="header-job">
                    <div className="company">
                        <h4>{job.company}</h4>
                    </div>
                    <div className="features">
                        {job.new && (<div className="new"><h5>New!</h5></div>)}
                        {job.featured && (<div className="featured"><h5>Featured</h5></div>)}
                    </div>
                </div>
                <div className="position">
                    {job.position}
                </div>
                <div className="info">
                    <span>{job.postedAt}</span>
                    <span>* {job.contract}</span>
                    <span>* {job.location}</span>
                </div>
                <hr></hr>
            </div>
            <div className="tag-container">
                <Tag key={job.role} text={job.role}></Tag>
                <Tag key={job.level} text={job.level}></Tag>
                {job.languages.map((l, index) => {
                    return (
                        <Tag key={index} text={l}></Tag>
                    )
                })}
            </div>
        </div >
    )
}