import React from 'react';

import Data from '..//data.json';
const JobsContext = React.createContext();

export function JobsProvider(props) {
    const [data, setData] = React.useState(Data);

    const [filters, setFilters] = React.useState([]);

    const filterData = (filter) => {

        if (!filters.includes(filter) && filters.length <= 6) {
            setFilters([...filters, filter]);
            let newData = data.filter((v) => (v.languages.includes(filter) || v.role === filter || v.tools.includes(filter) || v.level === filter))
            setData(newData);
        }




    }

    const removeFilter = (filter) => {
        let filterUpdated = filters.filter((f) => (f !== filter));
        setFilters(filterUpdated)
        updateFilter(filterUpdated);
    }

    const updateFilter = (filterUpdated = []) => {

        let dataUpdated = [...Data];

        filterUpdated.forEach(f => {
            dataUpdated = dataUpdated.filter((v) => (v.languages.includes(f) || v.role === f || v.tools.includes(f) || v.level === f))
        });

        setData(dataUpdated);
    }

    const clear = () => {
        setFilters([]);
        updateFilter([]);
    }
    const value = {
        data, filterData, filters, removeFilter, clear
    };

    return <JobsContext.Provider value={value} {...props}></JobsContext.Provider>

}

export const useJobs = () => {
    const context = React.useContext(JobsContext);

    return context;
}