import React from "react";
import { BsFacebook, BsLinkedin, BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { GoMailRead } from "react-icons/go";
import TopNavBar from "../../common/TopNavBar";

const JoinNow = () => {
  return (
    <>
      <TopNavBar />
      <div className="m-0">
        <img
          height="500"
          width="100%"
          alt="Company Logo"
          src="https://assets.livehire.com/tc-branding/hcltech/bg-8.jpg"
        />
      </div>
      <div
        style={{
          backgroundColor: "whitesmoke",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "70%",
            height: "80%",
            position: "absolute",
            top: "117px",
          }}
        >
          <div
            className="p-3"
            style={{ backgroundColor: "#FF5F57", height: "15%" }}
          >
            <p className="ml-2">
              Welcome to the <br />
              <h4>Amazon Talent Community</h4>
            </p>
          </div>

          <div className="p-4 d-flex">
            {/* parent div */}

            <div className="w-60">
              {/* Left side */}
              <h6>Hello! We'd love for you to connect with us!</h6>

              <p className="mt-3">
                Welcome to the Amazon Talent Community! Our team of talent
                experts is always looking to speak with highly motivated and
                well-qualified candidates. By creating a profile and joining our
                Talent Community, you will receive immediate access to the new
                job opportunities with Amazon. Join Us Today!
              </p>

              <div style={{ height: "70px" }}></div>

              <div>
                {/* Icons div */}

                <div className="d-flex justify-content-between">
                  <div>
                    <RiProfileLine size={50} color="gray" className="ml-3" />
                    <p style={{ color: "gray" }}>Create a profile</p>
                  </div>
                  <BsArrowRight size={20} color="gray" className="mt-3" />
                  <div className="">
                    <MdOutlineRoomPreferences
                      size={50}
                      color="gray"
                      className="ml-5"
                    />
                    <p style={{ color: "gray" }}>Set your preferences</p>
                  </div>
                  <BsArrowRight size={20} color="gray" className="mt-3" />
                  <div>
                    <GoMailRead size={50} color="gray" className="ml-4" />
                    <p className="mr-2" style={{ color: "gray" }}>
                      Get relevant jobs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="vl"
              style={{ borderLeft: "1px solid lightgray" }}
            ></div>

            <div className="ml-4 w-40">
              {/* Right side */}
              <div className="d-flex flex-column mx-5">
                <button className="btn btn-secondary m-2">
                  <BsFacebook /> Login with Facebook
                </button>
                <button className="btn btn-secondary m-2">
                  <FcGoogle /> Login with Google
                </button>
                <button className="btn btn-secondary m-2">
                  <BsLinkedin /> Login with Linkedin
                </button>
              </div>
              <div className="text-center">OR</div>
              <div className="mx-3 my-3">
                <div className="col-md-10 form-floating ml-4">
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
              <div className="mx-3 mb-2">
                <div className="col-md-10 form-floating ml-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email*"
                    name="name"
                    //   value={name}
                    //   onChange={(e) => onChange(e)}
                  />
                  <label>Password *</label>
                </div>
              </div>
              <div className="d-flex align-items-center mx-3 my-3">
                <div>
                  <input type="checkbox"></input>
                </div>
                <div className="ml-2">Remember me</div>
                <div className="ml-auto">
                  <a href="/">Forgot Password</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinNow;
