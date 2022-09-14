import React, { useState, useEffect } from "react";
import moment from "moment";
import job from "../../../data/jobs.json";
import { RiSuitcaseLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";

function JobList({ role }) {
  const jobs = job;
  const [ jobData, setJobs] = useState([])
  const jobType = [
    "Full Time",
    "Contract",
    "Part Time",
    "Temp To Hire",
    "Volunteer",
  ];
  const [searchJob, setSearchJob] = useState("");
  useEffect(() => {
    setJobs(job)
    setSearchJob(job)
  }, []);

  const filterJobs = (e) => {
    const filterJobs = searchJob.filter((val) => {
      if (e.target.value == "") {
        return val;
      } else if (
        val.jobTitle.toLowerCase().includes(e.target.value.toLowerCase()) ||
        val.jobType
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        val.jobStatus.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return val;
      }
    });

    setJobs(filterJobs);
  };

  const filterJobLocation = (e) => {
    const filterJobLocation = searchJob.filter((val) => {
      if (e.target.value == "") {
        return val;
      } else if (
        val.jobLocation.toLowerCase().includes(e.target.value.toLowerCase()) 
      ) {
        return val;
      }
    });

    setJobs(filterJobLocation);
  };

  return (
     <div className='card card-flat card-borderless bg-gray4 p-4 mb-3'>
        { role === 'Candidate' &&
        <div>
          <h3 className="ml-5">Job Search</h3>

          <div className="card card-flat bg-gray4 d-flex m-3 ml-5">
            <div className="card-body w-100">
              <div className="form-floating mb-2" style={{ zIndex: "999" }}>
                <div className="">
                  <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                    <div class="mb-2">
                      <input
                        type="text"
                        placeholder="Search Jobs"
                        class="form-control small font-14"

                        onChange={filterJobs}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                      <div class="mb-2">
                        <input
                          type="text"
                          placeholder="Search JobLocation"
                          class="form-control small font-14"

                          onChange={filterJobLocation}
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                      <div className="form-floating">
                        <select
                          className="font-14 form-select"
                          name="jobType"
                        // onChange={handleChange}
                        >
                          <option>Select Job Type</option>
                          {jobType.map((e) => (
                            <option selected={e === jobType} value={e}>
                              {e}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
        <div>
          <div>
            {jobData.map((request, i) => (
              <a
                key={i}             
                href={`/careers/amazon/jobs/${request.jobId}`}
                className="card p-0 d-flex w-100 align-items-center justify-content-between request-listview flex-row overflow-hidden mb-1"
              >
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="mr-3">
                      <h6>{request.jobTitle} </h6>
                    </span>
                    {request.hotJob && (
                      <span className="tag tag-coral mr-9">HOT</span>
                    )}
                  </div>
                  <div className="d-flex align-items-center">
                    {/* <div>
                      {request.jobStatus === "open" &&
                        <span className="tag tag-green1 mr-3">
                          Open
                        </span> 
                      }
                      { ( request.jobStatus === "active" &&
                        <span className="tag tag-orange1 mr-3">
                          Active
                        </span>
                      ) }
                      {  request.jobStatus === "expired" &&
                        <span className="tag tag-font_accent mr-3">
                          Expired
                        </span>
                      }
                    </div> */}
                    <span className="d-flex align-items-center me-3">
                      <RiSuitcaseLine />
                      <small className="font-regular font-primary font-gray1 mr-2 ml-2">
                        {request.jobType}
                      </small>
                    </span>
                    <span className="d-flex align-items-center me-3">
                      {request.jobLocation ? (
                        <>
                          <GoLocation />
                          <span className="font-regular font-primary font-gray1 ml-2">
                            {request.jobLocation}
                          </span>
                        </>
                      ) : (
                        <>
                          <GoLocation />
                          <span className="font-regular font-primary font-gray1 ml-2">
                            Remote
                          </span>
                        </>
                      )}
                    </span>
                    <span className="d-flex align-items-center me-3 ml-2">
                      <AiOutlineClockCircle />
                      {moment(request.expiresOn).diff(new Date(), "days") < 0 && (
                        <span className="tag tag-red1 ml-2">
                          <strong> Expired </strong>
                        </span>
                      )}
                      {moment(request.expiresOn).diff(new Date(), "days") ===
                        0 && (
                        <span className="tag tag-red1 ml-2">
                          <strong> Expires Today </strong>
                        </span>
                      )}
                      {moment(request.expiresOn).diff(new Date(), "days") ===
                        1 && (
                        <span className="font-regular ml-2">
                          <strong> 1 Day Left To Fill </strong>
                        </span>
                      )}
                      {moment(request.expiresOn).diff(new Date(), "days") > 1 &&
                        (moment(request.expiresOn).diff(new Date(), "days") <=
                        5 ? (
                          <span className="tag tag-red1 ml-2">
                            <strong>
                              {" "}
                              {moment(request.expiresOn).diff(
                                new Date(),
                                "days"
                              )}{" "}
                              Days Left To Fill{" "}
                            </strong>
                          </span>
                        ) : (
                          <span className="font-regular ml-2">
                            <strong>
                              {" "}
                              {moment(request.expiresOn).diff(
                                new Date(),
                                "days"
                              )}{" "}
                              Days Left To Fill{" "}
                            </strong>
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
    </div>

  );
}

export default JobList;
