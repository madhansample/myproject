import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegCalendarAlt, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import moment from "moment";
import TopNavBar from "../../common/TopNavBar";
import Footer from "../../common/Footer";
import Logo from "../../../assets/images/High5Logo.png";
import ApplyJob from "./ApplyJob";
import jobs from '../../../data/jobs.json'

function Index() {
  const [job, setJob] = useState({
    "jobTitle": "SAP ABAP Developer with P2P",
    "jobLocation": "Autin, TX / Mountain View, CA",
    "jobId": "XYMEJ",
    "positionCount": "1",
    "jobPostedDate": "2021-08-14T12:08:44.917Z",
    "jobRole": "SAP ABAP Developer",
    "Onsite": true,
    "Remote": false,
    "hotJob": true,
    "jobStatus": "open",
    "jobType": "FullTime",
    "expiresOn": "2022-10-10T12:08:44.917Z",
    "Hybrid" : 0,
    "jobDescription": [],
    "jobSkill": ["Node.js","Redux", "SAP"],
    "jobResponsibilty": ["Execute on integration and customization build based on SAP or other internal tools","Author design documents and present design reviews","Own responsibility for ensuring code is tested using defined test frameworks"," Identify problems with requirements and communicate them"," Work in an agile development environment making regular incremental progress"]
  });
  const [role, setRole] = useState("");

  useEffect(() => {
    let details = localStorage.getItem("job")
    let url = window.location.href.split('/')
    console.log(url.slice(-1)[0])
    setJob(jobs.find(i => i.jobId === url.slice(-1)[0]));
    setRole(localStorage.getItem("role"));
  }, []);

  return (
    <div>
      <TopNavBar />
      <div className="font-link">
        <Container
          fluid
          style={{ backgroundColor: "#FF5F57", marginTop: 50, height: 220 }}
        >
          <Row style={{ marginLeft: 80 }}>
            <Col style={{ marginTop: 40 }}>
              {/* <a style={{color: '#3F7BB9'}} href="/" >‹ Back to all jobs</a> */}

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
                      color: "#001B38",
                      fontSize: "12px",
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />

                  <span style={{ marginRight: 10, color: "white" }}>
                    {moment(new Date(job.jobPostedDate), "YYYYMMDD").fromNow()}
                  </span>
                </div>
              </div>
            </Col>
            {/* <ApplyJob /> */}
            { role === 'Candidate' && <ApplyJob />}
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
            Onsite / Hybrid / Remote :{" "}
            <strong> Hybrid (No. of Days - {job.Hybrid} )</strong>
          </span>
        ) : job.Onsite ? (
          <span>
            Onsite / Hybrid / Remote :<strong> Onsite</strong>
          </span>
        ) : (
          <span>
            {" "}
            Onsite / Hybrid / Remote :<strong> Remote</strong>{" "}
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
    // </body>
  );
}
export default Index;
