import React from 'react';
import TopNavBar from '../../common/TopNavBar';
import JobList from './JobList'

const Index = () => {
    return (
        <div>
            <TopNavBar />
            <hr />
            <h6 className='d-flex align-items-center justify-content-center'>Job List</h6>
            <JobList />
        </div>
    );
};

export default Index;