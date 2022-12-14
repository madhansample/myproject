import React, { useState } from "react";
import { SidebarLogo } from "../../constants/Constants";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ClientUpdate from "../modal/ClientUpdate";
import Modal from "react-bootstrap/Modal";
import AddJob from "../client/hiringmanager/AddJob";

const SideNavbar = (props) => {
  const { data } = props;
  const [update, setUpdate] = useState(false);
  const [showAddJobModal, setShowAddJobModal] = useState(false);

  const openUpdatePopUp = () => {
    setUpdate(true);
  };

  const closePopUP = () => {
    setUpdate(false);
  };

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
            {data.tenant && (
              <small ClassName="mb-0">Company : {data.tenant}</small>
            )}
          </div>
        </div>
      </div>
      <div className="body">
        {data.role == "Super Admin" && (
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
                  <button
                    type="button"
                    onClick={() => data.setOpenAddClient(true)}
                    className="dropdown-item"
                  >
                    <i className="fad fa-fw fa-users mr-2"></i>Add Client
                  </button>
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
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => data.setOpenClientUpdate(true)}
                  >
                    <i className="fad fa-fw fa-users mr-2"></i>Update Client
                  </button>
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
        {data.role == "Hiring Manager" && (
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
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => setShowAddJobModal(true)}
                  >
                    <i className="fad fa-fw fa-users mr-2"></i>Add Job
                  </button>
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
            <a href={data.url} className="active">
              <i
                className="fad fa-fw fa-home-lg-alt mr-3"
                aria-hidden="true"
              ></i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
      <Modal show={update} size="lg">
        <ClientUpdate close={closePopUP} />
      </Modal>
      <Modal show={showAddJobModal} size="lg">
        <Modal.Header>
          <h6 class="">Add Job</h6>
          <button
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setShowAddJobModal(false)}
            class="close p-0 bl-modal-close-btn"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <AddJob
            closePanel={() => setShowAddJobModal(false)}
            name={data.name}
            company={data.tenant}
            type={data.tenantType}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SideNavbar;
