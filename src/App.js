import React from 'react'
import { Header } from './components/Header'
import { Jobs } from './components/Jobs'
import './index.scss';

import { JobsProvider } from './context'

export const App = () => {
    return (
        <div>
            <Header />
            <JobsProvider>
                <Jobs></Jobs>
            </JobsProvider>
        </div>
    )
}
