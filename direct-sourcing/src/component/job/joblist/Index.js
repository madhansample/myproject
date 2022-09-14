import React from 'react';
import Footer from '../../common/Footer';
import TopNavBar from '../../common/TopNavBar';
import JobList from './JobList'

const Index = () => {
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
                    At HCL, we don’t just accept the differences—we celebrate them. 
                    We are committed to cultivating and preserving a culture of inclusion and connectedness. 
                    We are able to grow and learn better together with a diverse team of employees. 
                    As an equal opportunity employer, 
                    we stay true to our mission by ensuring that our place can be anyone’s place. 
                    Explore what it is like to work and grow at HCL!
                </em>
            </div>
            <JobList />
            <Footer/>           
        </div>
    );
};

export default Index;