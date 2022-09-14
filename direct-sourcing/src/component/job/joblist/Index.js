import React, { useEffect } from 'react';
import Footer from '../../common/Footer';
import TopNavBar from '../../common/TopNavBar';
import JobList from './JobList'

const Index = () => {

    useEffect(() => {
        localStorage.setItem('role', 'Candidate')
    }, [])

    return (
        <div>
            <TopNavBar />
            <div className='m-0'>
                <img height='200' width='100%' alt='Company Logo' src='https://assets.livehire.com/tc-branding/hcltech/bg-8.jpg' />
            </div>
            <div className='text-center m-2 mb-5'>
                <h2>
                    We believe everyone deserves to live the career they love.
                </h2>
                <em>
                Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives. We embrace new ways of doing things, make decisions quickly, and are not afraid to fail. We have the scope and capabilities of a large company, and the spirit and heart of a small one
                </em>
            </div>
            <JobList role='Candidate' />
            <Footer/>           
        </div>
    );
};

export default Index;