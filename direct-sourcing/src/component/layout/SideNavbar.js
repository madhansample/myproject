import React from "react";
import { SidebarLogo } from "../../constants/Constants";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const SideNavbar = (props) => {
  const { data } = props;
  return (
    <div id="Nav">
      <div className="top">
        <div className="d-flex align-items-center">
          <div
            className="brand-logo"
            style={{ backgroundImage: `url(${SidebarLogo})` }}
          />
          <div className="title px-2">
            <h6 className="mb-0">{data.name}</h6>
            <small className="mb-0">Role: {data.role}</small>
            <br />
            <small ClassName="mb-0">Company : {data.tenant}</small>
          </div>
        </div>
      </div>
      <div className="body">
        {data.role == "Admin" && (
          <div style={{ fontSize: "17px" }} data-bs-placement="top">
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom-end"
              overlay={
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="requestMoreMenu"
                >
                  {data.tenantType == 2 && (
                    <button
                      type="button"
                      onClick={() => data.setOpenAddClient(true)}
                      className="dropdown-item"
                    >
                      <i className="fad fa-fw fa-users mr-2"></i>Add Client
                    </button>
                  )}
                </div>
              }
            >
              <button type="button" className="btn w-100 px-0">
                <i className="fas fa-plus fa-fw-dropdown"></i>
                <span className="nav-text ml-2">New</span>
              </button>
            </OverlayTrigger>
          </div>
        )}
        <ul className="menu">
          <li>
            <a href="/staffingagency/admin" className="active">
              <i className="fad fa-fw fa-home-lg-alt mr-3" aria-hidden="true"></i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
