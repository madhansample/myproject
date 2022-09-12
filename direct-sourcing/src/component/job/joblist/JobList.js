import React, { useState, useEffect } from "react";
import moment from "moment";
import job from "../../../data/jobs.json";

function JobList() {
  const jobData = job;
  useEffect(() => {
    console.log(job);
  }, []);
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-11">
          {jobData.map((item, i) => (
            <a
              key={i}
              href={`/careers`}
              className="card p-0 d-flex w-100 align-items-center justify-content-between request-listview flex-row overflow-hidden mb-1"
            >
              <div className="card-body d-flex align-items-center overflow-auto">
                <div className="w-100 ml-2">
                  <div className="d-flex align-items-center mb-1">
                    <h6 className="mb-0 me-2">{item.jobTitle}</h6>
                  </div>
                  <div className="font-regular font-primary font-gray1">
                    <span>{item.jobSkill}</span>
                  </div>
                </div>
              </div>
              <div class="card-body font-regular flex-column align-items-end">
                <div class="mb-1">
                  <i className="far fa-map-marker-alt me-2 font-brandBlue"></i>
                  {item.jobLocation}
                </div>

                <div class="mb-1">
                  <i className="far fa-clock me-2 font-brandBlue"></i>
                  {item.jobPostedDate}
                  {/* {moment(new Date(item.jobPostedDate), "YYYYMMDD").fromNow()} */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default JobList;
