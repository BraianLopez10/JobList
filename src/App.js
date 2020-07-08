import React from 'react'
import { Header } from './components/Header'
import { Jobs } from './components/Jobs'
import { Filter } from './components/Filter'
import './index.scss';

import { JobsProvider } from './context'

import './app.scss'
export const App = () => {


    return (
        <div className="app">
            <Header />
            <JobsProvider>
                <Filter ></Filter>
                <Jobs></Jobs>
            </JobsProvider>
        </div>
    )
}
