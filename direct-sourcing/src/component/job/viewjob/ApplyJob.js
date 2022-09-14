import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillLinkedin,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
} from "react-icons/ai";
import { RiShareBoxLine } from "react-icons/ri";
import Logo from "../viewjob/High5Logo.png";
import ApplyWithEmail from "./ApplyWithEmail";

const ApplyJob = () => {
  const [isApplyJobModal, setIsApplyJobModal] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(false);
  const [electronicMessages, setElectronicMessages] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isTermsAccepted, setIsTempsAccepted] = useState(false);
  const [isRefer, setIsRefer] = useState(false);
  const [isApplyEmail, setIsApplyEmail] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        top: "-50px",
        marginLeft: "800px",
        width: "500px",
      }}
    >
      {isTermsAccepted ? (
        isTermsAccepted === true && isApplyEmail === true ? (
          <ApplyWithEmail
            setIsTempsAccepted={setIsTempsAccepted}
            setIsApplyEmail={setIsApplyEmail}
          />
        ) : (
          <div className=" mt-2">
            <div className="card card-lg mb-2">
              <div className="card-body" style={{ padding: "1.1rem" }}>
                <div className="w-50">
                  <h6 className="font-light mb-0">Apply with : </h6>
                </div>
                <hr />

                <button
                  className="btn btn-sm btn-secondary "
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <AiFillLinkedin />
                    <span className=""> LinkedIn</span>
                  </div>
                </button>

                <button
                  className="btn btn-sm btn-secondary my-3"
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <FcGoogle />
                    <span> Google</span>
                  </div>
                </button>

                <button
                  className="btn btn-sm btn-secondary"
                  style={{
                    width: "100%",
                    fontWeight: "bold",
                    color: "darkblue",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <FaFacebookF />
                    Facebook
                  </div>
                </button>

                <button
                  className="btn btn-sm btn-secondary my-3"
                  style={{
                    width: "100%",
                    //   fontWeight: "bold",
                    color: "black",
                  }}
                  onClick={() => setIsApplyEmail(true)}
                >
                  Apply with email
                </button>

                <div
                  className="d-flex mt-2 border-bottom mb-2 justify-content-center"
                  style={{ height: "15px" }}
                >
                  <hr></hr>
                  <div>
                    <span
                      style={{
                        color: "gray",
                        backgroundColor: "white",
                        fontSize: "10px",
                      }}
                    >
                      Powered by
                    </span>
                    <a
                      href="https://www.high5hire.com/"
                      rel="noopener"
                      target="_blank"
                    >
                      <img
                        style={{
                          width: 40,
                          height: 30,
                          paddingBottom: 10,
                          marginLeft: 5,
                        }}
                        src={Logo}
                      />
                    </a>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className=" mt-2">
          <div className="card card-lg mb-2">
            <div className="card-body" style={{ padding: "1.1rem" }}>
              <div className="w-50">
                <h4 className="font-light mb-0">Apply</h4>
                {/* <p className="mb-0 " style={{ width: "180px" }}>
              asdasdsd
            </p> */}
              </div>
              <hr className=""></hr>
              <div>
                {/* <button
                  className="btn btn-sm"
                  style={{
                    width: "100%",
                    backgroundColor: "#3388C4",
                    color: "whitesmoke",
                    fontWeight: "bold",
                  }}
                  onClick={() => setIsApplyJobModal(true)}
                >
                  <i className="fas fa-plus mr-2" />
                  Apply for this job
                </button> */}
                <button
                  style={{ width: "100%" }}
                  className="btn btn-outline-secondary "
                  onClick={() => setIsApplyJobModal(true)}
                >
                  Apply for this job
                </button>
              </div>

              <div
                className="d-flex mt-2 border-bottom mb-2  justify-content-center"
                style={{ height: "15px" }}
              >
                {/* <hr></hr> */}
                <div>
                  <span
                    style={{
                      color: "gray",
                      backgroundColor: "white",
                      fontSize: "10px",
                    }}
                  >
                    Powered by
                  </span>
                  <a
                    href="https://www.high5hire.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    <img
                      style={{
                        width: 40,
                        height: 30,
                        paddingBottom: 10,
                        marginLeft: 5,
                      }}
                      src={Logo}
                    />
                  </a>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className=" mt-2">
        <div className="card card-lg mb-2">
          <div className="card-body">
            <div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{
                  width: "100%",
                  fontWeight: "bold",
                }}
                onClick={() => setIsRefer(true)}
              >
                Refer someone
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-2">
        <div className="card card-lg mb-2">
          <div className="card-body">
            <div>
              <h6>Join our Talent Community</h6>
            </div>
            <p style={{ color: "gray" }}>
              <small>
                Not the job you're looking for? Become a member of our talent
                community to stay connected and be informed of any new
                opportunities.
              </small>
            </p>
            <div>
              <button
                className="btn btn-secondary btn-sm"
                style={{
                  width: "30%",
                  fontWeight: "bold",
                }}
                // onClick={() => closeModal(true)}
              >
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Job Modal */}

      <Modal
        show={isApplyJobModal}
        size="lg"
        className="modal fade center"
        data-backdrop="static"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-header" id="CreateQuestionModal">
          <h4 className="modal-title mx-3" id="CreateQuestionModalLabel">
            Terms and Conditions
          </h4>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setIsApplyJobModal(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Modal.Body style={{ backgroundColor: "#F3F5F7", padding: "30px" }}>
          <div className="">
            <ol className="ml-3">
              <li className="my-3 ">
                {" "}
                <strong> High5Hire's Terms of Service</strong>
                <a href="https://www.high5hire.com/" target="_blank">
                  {" "}
                  <RiShareBoxLine />{" "}
                </a>{" "}
              </li>

              <li
                className="my-3 p-2 d-flex justify-content-between"
                style={{ backgroundColor: "#EEEEEE", cursor: "pointer" }}
                onClick={() => setPersonalInfo(!personalInfo)}
              >
                <h6> High5Hire's Personal Information Collection Statement</h6>
                {!personalInfo ? (
                  <AiOutlinePlusSquare />
                ) : (
                  <AiOutlineMinusSquare />
                )}
              </li>
              {personalInfo && (
                <small>
                  High5Hire Ltd will collect, use and disclose your personal
                  information to connect you with companies (and their service
                  providers) for current and future recruitment and talent
                  pooling purposes, to personalise our services for you
                  (including providing job and company recommendations), and to
                  promote the business and services of High5Hire, its clients
                  and partners. Our Privacy Policy further explains how personal
                  information is collected, used and disclosed and how to
                  access, correct or complain about the handling of personal
                  information. Please note that High5Hire will process your data
                  in Australia where privacy laws may differ to where you are
                  located. Where you are an individual located in the EU or when
                  we handle your information that is subject to the EU General
                  Data Protection Regulation (GDPR) and High5Hire is the data
                  controller of your information, the terms of our Privacy
                  Policy apply to how we handle your personal information in
                  compliance with the GDPR.
                </small>
              )}

              <li
                className="my-3 p-2 d-flex justify-content-between"
                style={{ backgroundColor: "#EEEEEE", cursor: "pointer" }}
                onClick={() => setElectronicMessages(!electronicMessages)}
              >
                <h6> Commercial Electronic Messages Consent</h6>
                {!electronicMessages ? (
                  <AiOutlinePlusSquare />
                ) : (
                  <AiOutlineMinusSquare />
                )}
              </li>
              {electronicMessages && (
                <small>
                  I consent to High5Hire and parties with whom I am connected
                  sending me commercial electronic messages related to job
                  opportunities in the Talent Communities that I join and their
                  products and services.
                </small>
              )}

              <li className="my-3">
                <strong> Amazon Privacy Statement</strong>
                <a href="https://www.high5hire.com/" target="_blank">
                  {" "}
                  <RiShareBoxLine />
                </a>
              </li>
              <li className="my-3">
                <strong> Amazon Candidate Data Privacy Policy</strong>

                <a href="https://www.high5hire.com/" target="_blank">
                  {" "}
                  <RiShareBoxLine />
                </a>
              </li>
              <li className="my-3">
                <h6> Electronic Signature Authorisation</h6>
                <small>
                  I agree that the above authorisations and consents given by me
                  are valid as a signed document and shall continue to be
                  effective throughout the duration of my membership of any
                  Talent Community, the recruitment process and related
                  employment activities and until I request deletion of my
                  High5Hire account.
                </small>
              </li>
            </ol>
            <hr />
            <div className="d-flex">
              <span className="mt-4">
                <input
                  type="checkbox"
                  onClick={(e) => setIsChecked(e.target.checked)}
                />
              </span>
              <h6 className="ml-2 mt-4">
                I agree that I have read and understand the above terms and
                consent to proceeding on the basis of those terms.
              </h6>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#F3F5F7" }}>
          <button
            style={{ float: "right", width: 120 }}
            className="mb-4 btn btn-sm btn-secondary"
            onClick={() => setIsApplyJobModal(false)}
          >
            Decline
          </button>

          <button
            style={{ float: "right", width: 120 }}
            className=" mb-4 btn btn-sm btn-primary"
            disabled={!isChecked ? true : false}
            onClick={() => {
              setIsTempsAccepted(true);
              setIsApplyJobModal(false);
            }}
          >
            Accept
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={isRefer}
        size="lg"
        className="modal fade center"
        data-backdrop="static"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-header" id="CreateQuestionModal">
          <h4 className="modal-title mx-3 ml-3" id="CreateQuestionModalLabel">
            Refer someone
          </h4>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setIsRefer(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Modal.Body style={{ backgroundColor: "#F3F5F7", padding: "30px" }}>
          <div className="">
            <p className="ml-3" style={{ color: "gray" }}>
              You will be the referrer for anyone who applies using this link.
            </p>
            <hr />

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12">
                  <div className="section-sm">
                    <form className="login-form ">
                      <div className="row g-2 mt-2">
                        <div className="col-md-6 form-floating">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="name"
                            // value={name}
                            // onChange={(e) => onChange(e)}
                          />
                          <label>First Name *</label>
                        </div>
                        <div className="col-md-6 form-floating mb-2">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Last Name"
                            // value={email}
                            // onChange={(e) => onChange(e)}
                            autoComplete="new-email"
                          />
                          <label>Last Name *</label>
                        </div>
                      </div>

                      <div className="row g-2 mt-2">
                        <div className="col-md-6 form-floating">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                            name="name"
                            // value={name}
                            // onChange={(e) => onChange(e)}
                          />
                          <label>Email *</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-7 d-flex mt-4">
              <h6 className="pt-1 font-regular font-primary font-gray1 text-truncate">
                <div className="d-flex ">
                  Are you a current employee at Amazon?
                </div>
              </h6>
              <div className="form-check form-switch">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#F3F5F7" }}>
          <div className="d-flex w-100 p-3">
            <input type="text" />
            <button
              className="btn btn-secondary ml-3 mx-2"
              style={{ width: "30%" }}
            >
              Get Link
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ApplyJob;
