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
          <h5>High5hire Users</h5>
          <div className="row mt-3">
            <div className="col-xl-3 d-flex">
              <a href="/superadmin" className="card col p-0 card-xl mb-2">
                <div className="card-body text-center">
                  <img height="30px" src={adminIcon} />
                  <h6 className="mt-4">Super Admin</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a href="/high5coordinator" className="card col p-0 card-xl mb-2">
                <div className="card-body text-center">
                  <img height="30px" src={recIcon} />
                  <h6 className="mt-4">H5 Coordinator</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a href="/careers/jobs" className="card col p-0 card-xl mb-2">
                <div className="card-body text-center">
                  <img height="30px" src={adminIcon} />
                  <h6 className="mt-4">Career</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
          </div>
          <h5 style={{ marginTop: "50px" }}>Tenant - Client Users</h5>
          <div className="row mt-3">
            <div className="col-xl-3 d-flex">
              <a href="/client/admin" className="card col p-0 card-xl mb-2">
                <div className="card-body text-center">
                  <img height="30px" src={adminIcon} />
                  <h6 className="mt-4">Admin</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
            <div className="col-xl-3 d-flex">
              <a href="/client/recruiter" className="card col p-0 card-xl mb-2">
                <div className="card-body text-center">
                  <img height="30px" src={recIcon} />
                  <h6 className="mt-4">Recruiter</h6>
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
                  <h6 className="mt-4">Talent Community</h6>
                  <strong className="font-coral">Launch</strong>
                </div>
              </a>
            </div>
          </div>
          <h5 style={{ marginTop: "50px" }}>Candidate</h5>
          <div className="row mt-3 mb-5">
            <div className="col-xl-3 d-flex">
              <a href="/careers/amazon/jobs" className="card col p-0 card-xl mb-2">
                <div className="card-body text-center">
                  <img height="30px" src={adminIcon} />
                  <h6 className="mt-4">Candidate</h6>
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
