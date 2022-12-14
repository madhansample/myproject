import { useState } from "react";
import SideNavbar from "../layout/SideNavbar";
import TopNavbar from "../layout/TopNavbar";
import AddClient from "./AddClient";

const Index = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [openAddClient, setOpenAddClient] = useState(false);
  const clientData = {
    role: "Super Admin",
    name: "Super Admin",
    tenant: "",
    url: "/superadmin",
    setOpenAddClient: setOpenAddClient,
  };

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
              <div className="col-12 text-center">
                <div className="mb-5">
                  <h1>
                    Hi. <span className="wave">👋</span> Steve Welcome Back{" "}
                  </h1>
                  <p>What can we help you work on today?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openAddClient && (
        <AddClient
          openAddClient={openAddClient}
          setOpenAddClient={setOpenAddClient}
        />
      )}
    </body>
  );
};

export default Index;
