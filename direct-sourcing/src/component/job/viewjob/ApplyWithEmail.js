import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Dropzone from "react-dropzone";

const ApplyWithEmail = (props) => {
  const [workedNo, setWorkedNo] = useState(false);
  const [workedUsedTo, setWorkedUsedTo] = useState(false);
  const [stillWork, setStillWork] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [contractor, setContractor] = useState(false);
  const [continueForm, setContinueForm] = useState(false);
  const [authorisedWork, setAuthorisedWork] = useState(false);
  const [emigrationBenifit, setEmigrationBenifit] = useState(false);

  const typeClick = (type) => {
    if (type === "no") {
      setWorkedNo(true);
      setWorkedUsedTo(false);
      setStillWork(false);
    }
    if (type === "usedTo") {
      setWorkedNo(false);
      setWorkedUsedTo(true);
      setStillWork(false);
    }

    if (type === "still") {
      setWorkedNo(false);
      setWorkedUsedTo(false);
      setStillWork(true);
    }
  };

  const selectEmployeeType = (type) => {
    if (type === "employee") {
      setEmployee(true);
      setContractor(false);
    }
    if (type === "contractor") {
      setEmployee(false);
      setContractor(true);
    }
  };

  const onUploadHandler = (file, type) => {
    // let docs = [...documents];
    console.log(file);
    // if (file) {
    //   if (file[0].size / 1024 > 2048) {
    //     toast.error("File size exceeded 2 MB");
    //   } else {
    //     file.forEach((eachFile) => {
    //       const reader = new FileReader();
    //       reader.readAsDataURL(eachFile);
    //       reader.onload = (event) => {
    //         const obj = {
    //           documentName: eachFile.name,
    //           base64: event.target.result,
    //           uploadedDate: todayDate,
    //           uploadedBy: name,
    //           category:
    //             type === "Video" ? "Video Job Description" : "Job Description",
    //           role: getUserRole(),
    //           type,
    //         };
    //         docs.push(obj);
    //         setDocuments((current) => [...current, obj]);
    //       };
    //     });
    //   }
    // }
  };
  return (
    <>
      <div className=" mt-2">
        <div className="card card-lg mb-2">
          <div className="card-body" style={{ padding: "1.1rem" }}>
            <div className="w-50">
              <h5 className="font-light mb-2 ml-3 ">Apply : </h5>
            </div>
            <hr />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12">
                  <div className=" section-sm">
                    {/* <p>Please fill the form below to invite member.</p> */}
                    <form className="login-form ">
                      <div className="row g-2">
                        <div className="col-md form-floating">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email*"
                            name="name"
                            //   value={name}
                            //   onChange={(e) => onChange(e)}
                          />
                          <label>Email Address *</label>
                        </div>
                      </div>
                      <div className="row g-2 mt-2">
                        <div className=" col-md-6 form-floating mb-2">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="First Name*"
                            //   value={email}
                            //   onChange={(e) => onChange(e)}
                            autoComplete="new-email"
                          />
                          <label>First Name *</label>
                        </div>

                        <div className=" col-md-6 form-floating mb-2">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Second Name*"
                            //   value={email}
                            //   onChange={(e) => onChange(e)}
                            autoComplete="new-email"
                          />
                          <label>Second Name *</label>
                        </div>
                      </div>
                      <div className="row g-2">
                        <div className="col-md">
                          <PhoneInput
                            inputClass="form-control font-14 w-100"
                            required="true"
                            placeholder="Primary Phone*"
                            country={"us"}
                            // value={contactInfo.candidatePhone}
                            name="mobilePhone"
                            // onChange={(value) => setContactInfo({ ...contactInfo, ['candidatePhone']: value })}
                            // onChange={(value, country) => {
                            //     _onChangeText(value, country)
                            // }}
                          />
                          {/* { profileValidation.phoneError && <small className="validation ml-1">{profileValidation.phoneError}</small>} */}
                        </div>
                      </div>
                      <div className="row g-2 mt-2">
                        <div className=" col-md-6 form-floating mb-2">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="First Name*"
                            //   value={email}
                            //   onChange={(e) => onChange(e)}
                            autoComplete="new-email"
                          />
                          <label>Current Position</label>
                        </div>

                        <div className=" col-md-6 form-floating mb-2">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Second Name*"
                            //   value={email}
                            //   onChange={(e) => onChange(e)}
                            autoComplete="new-email"
                          />
                          <label>Current Company</label>
                        </div>
                      </div>
                      <hr />

                      {/* Questions */}

                      <div>
                        <p>
                          Are you legally authorized to work in the United
                          States?
                        </p>
                        <div className="row">
                          <div className="col-12 d-flex flex-column flex-lg-row">
                            <button
                              onClick={() => setAuthorisedWork(true)}
                              type="button"
                              className={
                                authorisedWork
                                  ? "card card-flat p-0 mr-2 mb-2 mb-lg-0 selected"
                                  : "card card-flat p-0 mr-2 mb-2 mb-lg-0"
                              }
                            >
                              <div class="card-body text-left text-left">
                                <div className="d-flex">
                                  {authorisedWork ? (
                                    <>
                                      <div className="mr-2 font-green font-16">
                                        <i className="fad fa-check-circle"></i>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="mr-2 font-muted font-16">
                                      <i className="fad fa-circle"></i>
                                    </div>
                                  )}

                                  <div>
                                    <div>
                                      <strong class="font-blue_primary">
                                        Yes
                                      </strong>
                                    </div>
                                    {/* <p class="mb-0">
                                    Hire for a full time position
                                  </p> */}
                                  </div>
                                </div>
                              </div>
                            </button>

                            <button
                              onClick={() => setAuthorisedWork(false)}
                              type="button"
                              className={
                                !authorisedWork
                                  ? "card card-flat p-0 mr-2 mb-2 mb-lg-0 selected"
                                  : "card card-flat p-0 mr-2 mb-2 mb-lg-0"
                              }
                            >
                              <div class="card-body text-left text-left">
                                <div className="d-flex">
                                  {!authorisedWork ? (
                                    <>
                                      <div className="mr-2 font-green font-16">
                                        <i className="fad fa-check-circle"></i>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="mr-2 font-muted font-16">
                                      <i className="fad fa-circle"></i>
                                    </div>
                                  )}

                                  <div>
                                    <div>
                                      <strong class="font-blue_primary">
                                        No
                                      </strong>
                                    </div>
                                    {/* <p class="mb-0">
                                    Hire for a full time position
                                  </p> */}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2">
                        <p>
                          Do you now or in the future require sponsorship for an
                          immigration-related benefit?
                        </p>
                        <div className="row">
                          <div className="col-12 d-flex flex-column flex-lg-row">
                            <button
                              onClick={() => setEmigrationBenifit(true)}
                              type="button"
                              className={
                                emigrationBenifit
                                  ? "card card-flat p-0 mr-2 mb-2 mb-lg-0 selected"
                                  : "card card-flat p-0 mr-2 mb-2 mb-lg-0"
                              }
                            >
                              <div class="card-body text-left text-left">
                                <div className="d-flex">
                                  {emigrationBenifit ? (
                                    <>
                                      <div className="mr-2 font-green font-16">
                                        <i className="fad fa-check-circle"></i>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="mr-2 font-muted font-16">
                                      <i className="fad fa-circle"></i>
                                    </div>
                                  )}

                                  <div>
                                    <div>
                                      <strong class="font-blue_primary">
                                        Yes
                                      </strong>
                                    </div>
                                    {/* <p class="mb-0">
                                    Hire for a full time position
                                  </p> */}
                                  </div>
                                </div>
                              </div>
                            </button>

                            <button
                              onClick={() => setEmigrationBenifit(false)}
                              type="button"
                              className={
                                !emigrationBenifit
                                  ? "card card-flat p-0 mr-2 mb-2 mb-lg-0 selected"
                                  : "card card-flat p-0 mr-2 mb-2 mb-lg-0"
                              }
                            >
                              <div class="card-body text-left text-left">
                                <div className="d-flex">
                                  {!emigrationBenifit ? (
                                    <>
                                      <div className="mr-2 font-green font-16">
                                        <i className="fad fa-check-circle"></i>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="mr-2 font-muted font-16">
                                      <i className="fad fa-circle"></i>
                                    </div>
                                  )}

                                  <div>
                                    <div>
                                      <strong class="font-blue_primary">
                                        No
                                      </strong>
                                    </div>
                                    {/* <p class="mb-0">
                                    Hire for a full time position
                                  </p> */}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p>Have you ever worked with HCL ?</p>
                        <div className="row">
                          <div className="col-12 d-flex flex-column flex-lg-row">
                            <button
                              onClick={() => typeClick("no")}
                              type="button"
                              className={
                                workedNo
                                  ? "card card-flat p-0 mr-2 mb-2 mb-lg-0 selected"
                                  : "card card-flat p-0 mr-2 mb-2 mb-lg-0"
                              }
                            >
                              <div class="card-body text-left text-left">
                                <div className="d-flex">
                                  {workedNo ? (
                                    <>
                                      <div className="mr-2 font-green font-16">
                                        <i className="fad fa-check-circle"></i>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="mr-2 font-muted font-16">
                                      <i className="fad fa-circle"></i>
                                    </div>
                                  )}

                                  <div>
                                    <div>
                                      <strong class="font-blue_primary">
                                        No
                                      </strong>
                                    </div>
                                    {/* <p class="mb-0">
                                    Hire for a full time position
                                  </p> */}
                                  </div>
                                </div>
                              </div>
                            </button>

                            <button
                              onClick={() => typeClick("usedTo")}
                              type="button"
                              className={
                                workedUsedTo
                                  ? "card card-flat p-0 mr-2 mb-2 mb-lg-0 selected"
                                  : "card card-flat p-0 mr-2 mb-2 mb-lg-0"
                              }
                            >
                              <div class="card-body text-left text-left">
                                <div className="d-flex">
                                  {workedUsedTo ? (
                                    <>
                                      <div className="mr-2 font-green font-16">
                                        <i className="fad fa-check-circle"></i>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="mr-2 font-muted font-16">
                                      <i className="fad fa-circle"></i>
                                    </div>
                                  )}

                                  <div>
                                    <div>
                                      <strong class="font-blue_primary">
                                        Used to
                                      </strong>
                                    </div>
                                    {/* <p class="mb-0">
                                    Hire for a full time position
                                  </p> */}
                                  </div>
                                </div>
                              </div>
                            </button>

                            <button
                              onClick={() => typeClick("still")}
                              type="button"
                              className={
                                stillWork
                                  ? "card card-flat p-0 mr-2 mb-2 mb-lg-0 selected"
                                  : "card card-flat p-0 mr-2 mb-2 mb-lg-0"
                              }
                            >
                              <div class="card-body text-left text-left">
                                <div className="d-flex">
                                  {stillWork ? (
                                    <>
                                      <div className="mr-2 font-green font-16">
                                        <i className="fad fa-check-circle"></i>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="mr-2 font-muted font-16">
                                      <i className="fad fa-circle"></i>
                                    </div>
                                  )}

                                  <div>
                                    <div>
                                      <strong class="font-blue_primary">
                                        I still do
                                      </strong>
                                    </div>
                                    {/* <p class="mb-0">
                                    Hire for a full time position
                                  </p> */}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        {workedUsedTo && (
                          <div className="d-flex">
                            <div
                              className="col-sm-6 d-flex mt-2"
                              onClick={() => selectEmployeeType("employee")}
                            >
                              <h6 className="pt-1 font-regular font-primary font-gray1 ">
                                <div className="d-flex">As an employee</div>
                              </h6>
                              {employee ? (
                                <>
                                  <div className="mr-2 font-green font-16 mt-1 ml-1">
                                    <i className="fad fa-check-circle"></i>
                                  </div>
                                </>
                              ) : (
                                <div className="mr-2 font-muted font-16 mt-1 ml-1">
                                  <i className="fad fa-circle"></i>
                                </div>
                              )}

                              {/* <div className="form-check form-switch">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </div> */}
                            </div>

                            <div
                              className="col-sm-6 d-flex mt-2"
                              onClick={() => selectEmployeeType("contractor")}
                            >
                              <h6 className="pt-1 font-regular font-primary font-gray1">
                                <div className="d-flex">As a contractor</div>
                              </h6>
                              {contractor ? (
                                <>
                                  <div className="mr-2 font-green font-16 mt-1 ml-1">
                                    <i className="fad fa-check-circle"></i>
                                  </div>
                                </>
                              ) : (
                                <div className="mr-2 font-muted font-16 mt-1 ml-1">
                                  <i className="fad fa-circle"></i>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <hr />
                      <div className="d-flex align-items-center mt-2">
                        <p className="m-0 mr-2">Upload your resume</p>
                        <Dropzone
                          onDrop={(file) => onUploadHandler(file, "JD")}
                          multiple={false}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()} className="">
                              <button
                                type="button"
                                className="btn btn-sm btn-secondary"
                              >
                                <i className="far fa-cloud-upload mr-1 fa-fw"></i>
                                Upload
                              </button>
                              <input
                                type="file"
                                {...getInputProps()}
                                accept=".doc, .docx, .pdf, application/msword"
                              />
                            </div>
                          )}
                        </Dropzone>
                        <div className="ml-3">
                          {/* <small>
                            Supported Formats: .doc, .docx and .pdf <br /> File
                            Size: upto 2 MB
                          </small> */}
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary mt-3"
                          style={{
                            width: "100%",
                            fontWeight: "bold",
                          }}
                          onClick={() => {
                            props.setIsTempsAccepted(false);
                            props.setIsApplyEmail(false);
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyWithEmail;
