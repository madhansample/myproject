import React from "react";
import {
  adminIcon,
  hmIcon,
  recIcon,
  talentIcon,
} from "../../constants/Constants";

const Index = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-xl-12">
          <h5>Tenant - Client Users</h5>
          <div className="row mt-3">
            <div className="col-xl-3 d-flex">
              <a href="/client/admin" className="card col p-0 card-xl mb-2">
                <div className="card-body text-center">
                  <img height="30px" src={adminIcon} />
                  <h6 className="mt-4">Client Admin</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a href="/client/curator" className="card col p-0 card-xl mb-2">
                <div className="card-body text-center">
                  <img height="30px" src={recIcon} />
                  <h6 className="mt-4">Client Curator</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a
                href="/client/hiringmanager"
                className="card col p-0 card-xl mb-2"
              >
                <div className="card-body text-center">
                  <img height="30px" src={hmIcon} />
                  <h6 className="mt-4">Hiring Manager</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a
                href="/client/talentcommunity"
                className="card col p-0 card-xl mb-2"
              >
                <div className="card-body text-center">
                  <img height="30px" src={talentIcon} />
                  <h6 className="mt-4">Client Talent Community</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
          </div>
          <h5 style={{ marginTop: "50px" }}>
            Tenant - Staffing Agencies Users
          </h5>
          <div className="row mt-3">
            <div className="col-xl-3 d-flex">
              <a
                href="/staffingagency/admin"
                className="card col p-0 card-xl mb-2"
              >
                <div className="card-body text-center">
                  <img height="30px" src={adminIcon} />
                  <h6 className="mt-4">Staffing Admin</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a
                href="/staffingagency/curator"
                className="card col p-0 card-xl mb-2"
              >
                <div className="card-body text-center">
                  <img height="30px" src={recIcon} />
                  <h6 className="mt-4">Staffing Curator</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a
                href="/staffingagency/customersuccess"
                className="card col p-0 card-xl mb-2"
              >
                <div className="card-body text-center">
                  <img height="30px" src={hmIcon} />
                  <h6 className="mt-4">Customer Success</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a
                href="/staffingagency/talentcommunity"
                className="card col p-0 card-xl mb-2"
              >
                <div className="card-body text-center">
                  <img height="30px" src={talentIcon} />
                  <h6 className="mt-4">Staffing Talent Community</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
