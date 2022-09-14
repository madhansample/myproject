import React, {useState} from "react";
import { SidebarLogo } from "../../constants/Constants";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ClientUpdate from "../modal/ClientUpdate";
import Modal from "react-bootstrap/Modal";

const SideNavbar = (props) => {
  const { data } = props;
  const [update, setUpdate] = useState(false);

  const openUpdatePopUp = () => {
    setUpdate(true);
  };

  const closePopUP = () => {
    setUpdate(false);
  };

  return (
    <div id="Nav">
      <div class="top">
        <div class="d-flex align-items-center">
          <div
            class="brand-logo"
            style={{ backgroundImage: `url(${SidebarLogo})` }}
          />
          <div class="title px-2">
            <h6 class="mb-0">{data.name}</h6>
            <small class="mb-0">Role: {data.role}</small>
            <br />
            <small ClassName="mb-0">Company : {data.tenant}</small>
          </div>
        </div>
      </div>
      <div class="body">
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
                    <button type="button" className="dropdown-item">
                      <i className="fad fa-fw fa-users mr-2"></i>Add Client
                    </button>
                  )}
                  {data.tenantType == 1 && (
                    <button type="button" className="dropdown-item" onClick={openUpdatePopUp}>
                      <i className="fad fa-fw fa-users mr-2"></i>Update Client
                    </button>
                  )}
                </div>
              }
            >
              <button type="button" className="btn w-100 px-0">
                <i class="fas fa-plus fa-fw-dropdown"></i>
                <span class="nav-text ml-2">New</span>
              </button>
            </OverlayTrigger>
          </div>
        )}
        <ul class="menu">
          <li>
            <a href="/staffingagency/admin" class="active">
              <i class="fad fa-fw fa-home-lg-alt mr-3" aria-hidden="true"></i>
              <span class="nav-text">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
      <Modal show={update} size="lg">
        <ClientUpdate close={closePopUP} />
      </Modal>
    </div>
  );
};

export default SideNavbar;
