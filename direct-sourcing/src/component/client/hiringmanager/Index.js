import React, { useState } from 'react';
import TopNavbar from '../../layout/TopNavbar';
import SideNavbar from '../../layout/SideNavbar';
import JobList from '../../job/joblist/JobList'

const Index = () => {
    const [ sidebarToggle, setSidebarToggle ] = useState(true)
    const clientData = {
        role: "Hiring Manager",
        name: "Jos Stock",
        tenant: "Amazon",
        tenantType: 1,
        url: "/client/hiringmanager"
    }

    return (     
        <body className={sidebarToggle ? "layout1 close-menu" : "layout1"}>
            <div className="body-decorator body-decorator-top"></div>
            <div className="body-decorator body-decorator-bottom"></div>
            <SideNavbar sidebarToggle={sidebarToggle} data={clientData} />
            <TopNavbar
                setSidebarToggle={setSidebarToggle}
                sidebarToggle={sidebarToggle}
            />
            <div id="Content">
                <div className="section section-sm pt-0-768">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div class="col-lg-12 text-center">
                                <div class="mb-5">
                                    <h1>
                                    Hi. <span className="wave">👋</span> Jos Welcome Back{" "}
                                    </h1>
                                    <p>What can we help you work on today?</p>                                   
                                </div>
                                <JobList role='HM' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
};

export default Index;