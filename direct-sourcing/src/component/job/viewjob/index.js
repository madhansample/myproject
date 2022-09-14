import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegCalendarAlt, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import TopNavbar from "../../common/TopNavBar";
import Footer from "../../common/Footer";
import Logo from "../../../assets/images/High5Logo.png";
import ApplyJob from "./ApplyJob";
function Index() {
  const [job, setJob] = useState({
    jobTitle: "Oracle LSH and OBIEE developer",
    jobLocation: "Princeton, NJ - United States",
    jobId: "D7XJ4",
    positionCount: "1",
    jobPostedDate: "2021-12-08T12:08:44.917Z",
    jobRole: "Oracle LSH",
    Onsite: false,
    Remote: true,
    Hybrid: 0,
    jobDescription: [],
    jobSkill: ["Oracle", "My SQL", "OBIEE"],
    jobResponsibilty: [
      "Handling support incidents, change requests and problem tickets independently",
      "Implementing system changes and adhering process/documentations",
      "Co-ordinating various IT team and ensure the application availability and business continuity",
      "Co-ordinate and closely work with Business members and managing outage communications",
      "Completing Business requirements on time and adhering SLAs",
    ],
  });
  // useEffect(() => {
  //   setJob(job);
  // }, []);
  console.log(job);
  return (
    <div>
      <TopNavbar />
      <div>
        <div className="font-link">
          <Container fluid style={{ backgroundColor: "#FF5F57", height: 220 }}>
            <Row style={{ marginLeft: 80 }}>
              <Col style={{ marginTop: 40 }}>
                <a style={{ color: "white" }} href="/">
                  ‹ Back to all jobs
                </a>
                <div className="header">
                  <h1 style={{ marginTop: 20, color: "white" }}>
                    {job.jobTitle}
                  </h1>
                  <div style={{ marginTop: 20 }}>
                    <FaMapMarkerAlt
                      style={{
                        color: "#001B38",
                        fontSize: "12px",
                        marginLeft: 1,
                        marginRight: 5,
                      }}
                    />
                    <span style={{ marginRight: 10, color: "white" }}>
                      {job.jobLocation}
                    </span>
                    <FaUser
                      style={{
                        color: "#001B38",
                        fontSize: "12px",
                        marginLeft: 10,
                        marginRight: 5,
                      }}
                    />
                    <span style={{ marginRight: 10, color: "white" }}>
                      {job.positionCount} Position
                    </span>
                    <FaRegCalendarAlt
                      style={{
                        color: "#3F7BB9",
                        fontSize: "12px",
                        marginLeft: 10,
                        marginRight: 5,
                      }}
                    />
                    <span style={{ marginRight: 10, color: "white" }}>
                      {job.jobDuration}
                    </span>
                  </div>
                </div>
              </Col>
              <ApplyJob />
            </Row>
          </Container>
        </div>
        <div style={{ marginLeft: 100, marginTop: 20 }}>
          <p>
            Job Id :
            <strong>
              <span style={{ marginRight: 10 }}> {job.jobId}</span>
            </strong>
          </p>
          <p>
            Role : <strong> {job.jobRole}</strong>
          </p>
          <p>
            Location : <strong> {job.jobLocation}</strong>
          </p>
          {job.Hybrid !== 0 ? (
            <span>
              Workplace Type :{" "}
              <strong> Hybrid (No. of Days - {job.Hybrid} )</strong>
            </span>
          ) : job.Onsite ? (
            <span>
              Workplace Type :<strong> Onsite</strong>
            </span>
          ) : (
            <span>
              {" "}
              Workplace Type :<strong> Remote</strong>{" "}
            </span>
          )}
          {/* // job.Onsite ?  <p><strong>Onsite / Hybrid / Remote :  Onsite</strong></p>
              // :  <strong>Onsite / Hybrid / Remote :  Remote</strong> */}
          {/* <p><strong>Onsite / Hybrid / Remote :  Hybrid  (No. of Days : {job.Hybrid}</strong></p> */}
        </div>
        <div style={{ marginLeft: 100, marginTop: 40 }}>
          <strong>Skills</strong>
          {job.jobSkill.map((ele, i) => {
            return <p>{`${i + 1}) ${ele} `}</p>;
          })}
        </div>
        <div style={{ marginLeft: 100, marginTop: 40 }}>
          <strong>Responsibilities:</strong>
          {job.jobResponsibilty.map((ele, i) => {
            return <p>{`${i + 1}) ${ele} `}</p>;
          })}
        </div>
        <div style={{ marginLeft: 100, marginTop: 80 }}>
          <span>
            Posted on {job.jobPostedDate}, {job.jobPublishTime}
          </span>
        </div>
        <div
          style={{
            marginLeft: 100,
            marginTop: 40,
            width: 625,
            height: 1.5,
            backgroundColor: "#eee",
          }}
        ></div>
        <div style={{ marginLeft: 100, marginTop: 40 }}>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            // style={{ backgroundColor: "#3F7BB9" }}
          >
            <span>
              <strong> Back to Top</strong>{" "}
            </span>
          </button>
        </div>
        <footer style={{ marginLeft: 100, marginTop: 40 }}>
          <div>
            <span>Powered by</span>
            <a>
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
          <p>
            <a>Privacy Policy</a> and <a>Terms of Service</a>
          </p>
        </footer>
      </div>
    </div>
    // </body>
  );
}
export default Index;
