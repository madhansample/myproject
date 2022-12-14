import React, { useState, useEffect } from "react";
import SideNavbar from "../../layout/SideNavbar";
import TopNavbar from "../../layout/TopNavbar";

const Index = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const clientData = {
    role: "Recruiter",
    name: "Oliver Davis",
    tenant: "TCC",
    url: "/client/recruiter",
    tenantType: 1,
  };

  useEffect(() => {
    localStorage.setItem('role', 'Client Recruiter')
}, [])

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
              <div class="col-12 text-center">
                <div class="mb-5">
                  <h1>
                    Hi. <span className="wave">👋</span> Oliver Welcome Back{" "}
                  </h1>
                  <p>What can we help you work on today?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Index;
